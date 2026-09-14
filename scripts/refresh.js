#!/usr/bin/env node
// The mechanical half of the weekly update. No model involved.
//
// For the week's city it opens every venue's exhibitions page, records whether
// the page is reachable and whether its visible text changed since last week,
// drops exhibitions that closed more than a month ago, and writes a report
// naming only the venues that actually need a human or an agent to look.
//
// Two things follow from that. The refresh is cheap and deterministic, so it
// works whether or not the agent runs — that is the fallback. And when the
// agent does run it reads the report instead of re-opening 124 websites, which
// is where nearly all of the token cost used to go.
//
// Usage:
//   node scripts/refresh.js                 the city whose turn it is
//   node scripts/refresh.js boston          a named city
//   node scripts/refresh.js --dry-run       report only, write nothing
//   node scripts/refresh.js --offline       skip the network (used by the smoke test)

const fs = require("fs");
const path = require("path");
const vm = require("vm");
const crypto = require("crypto");
const { execFileSync } = require("child_process");
const { cityForWeek, ORDER } = require("./rotation.js");

const ROOT = path.join(__dirname, "..");
const DATA = path.join(ROOT, "data");
const STATE = path.join(ROOT, "state", "scan.json");
const REPORTS = path.join(ROOT, "reports");

// How long a closed exhibition stays in the file before it is dropped.
const KEEP_CLOSED_DAYS = 30;
// A slow museum site should not hang the run.
const TIMEOUT_MS = 20000;
const CONCURRENCY = 6;
// Some museum sites refuse an obvious robot. Identify honestly but completely.
const UA = "Mozilla/5.0 (compatible; OnViewBot/1.0; +https://github.com/YSWen-sketch/philly-museums)";

const args = process.argv.slice(2);
const flag = (f) => args.includes(f);
const DRY = flag("--dry-run");
const OFFLINE = flag("--offline");
const named = args.find((a) => !a.startsWith("--"));
if (named && !ORDER.includes(named)) {
  console.error(`unknown city ${named}; expected one of ${ORDER.join(", ")}`);
  process.exit(2);
}
const CITY = named || cityForWeek();

// ---------- reading a city file ----------

function readCity(id) {
  const file = path.join(DATA, id + ".js");
  const text = fs.readFileSync(file, "utf8");
  const sandbox = { CITIES: [] };
  vm.createContext(sandbox);
  vm.runInContext(text, sandbox, { filename: `data/${id}.js` });
  const city = sandbox.CITIES[0];
  const venues = [];
  city.groups.forEach((g) => g.items.forEach((m) => venues.push({ group: g.g, ...m })));
  return { file, text, city, venues };
}

// ---------- fetching ----------

// Reduce a page to the text a reader would see, so that a rotating banner, a
// cache-busting query string or a changed script does not read as a change.
function fingerprint(html) {
  const text = html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<!--[\s\S]*?-->/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z]+;|&#\d+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
  return { hash: crypto.createHash("sha256").update(text).digest("hex").slice(0, 16), length: text.length };
}

async function fetchPage(url) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(url, {
      signal: ctrl.signal,
      redirect: "follow",
      headers: { "user-agent": UA, accept: "text/html,application/xhtml+xml" },
    });
    const body = res.ok ? await res.text() : "";
    return { status: res.status, url: res.url, ...(res.ok ? fingerprint(body) : { hash: null, length: 0 }) };
  } catch (e) {
    return { status: 0, url, hash: null, length: 0, error: e.name === "AbortError" ? "timeout" : e.message };
  } finally {
    clearTimeout(timer);
  }
}

// Run `jobs` a few at a time rather than opening 124 sockets at once.
async function pool(items, worker, limit = CONCURRENCY) {
  const out = new Array(items.length);
  let next = 0;
  await Promise.all(
    Array.from({ length: Math.min(limit, items.length) }, async () => {
      while (next < items.length) {
        const i = next++;
        out[i] = await worker(items[i], i);
      }
    })
  );
  return out;
}

// ---------- pruning exhibitions that closed long ago ----------

const iso = (d) => d.toISOString().slice(0, 10);

// Every exhibition occupies exactly one line, and every shows array is written
// as `shows: [` … `] },`, because the city files are generated that way. The
// prune therefore works on whole lines, and the caller re-validates afterwards
// so a hand-edited file that broke the convention cannot corrupt the data.
function pruneExpired(text, cutoff) {
  const lines = text.split("\n");
  const out = [];
  const dropped = [];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (!/^\s*shows: \[\s*$/.test(line)) { out.push(line); continue; }

    // Collect the show lines up to the closing bracket.
    const indent = line.match(/^\s*/)[0];
    const body = [];
    let j = i + 1;
    for (; j < lines.length && !/^\s*\] \},?\s*$/.test(lines[j]); j++) body.push(lines[j]);
    if (j >= lines.length) { out.push(line); continue; }   // unterminated: leave alone

    const kept = body.filter((s) => {
      const m = s.match(/\be: "(\d{4}-\d{2}-\d{2})"/);
      if (m && m[1] < cutoff) {
        const t = (s.match(/\bt: "((?:[^"\\]|\\.)*)"/) || [null, "?"])[1];
        dropped.push({ t, e: m[1] });
        return false;
      }
      return true;
    });

    const tail = lines[j].trimEnd().endsWith(",") ? " }," : " }";   // keeps the leading space
    if (kept.length === 0) {
      out.push(`${indent}shows: []${tail}`);
    } else {
      out.push(line);
      kept.forEach((s, k) => out.push(s.replace(/,\s*$/, "") + (k < kept.length - 1 ? "," : "")));
      out.push(lines[j]);
    }
    i = j;
  }
  return { text: out.join("\n"), dropped };
}

function validates() {
  try {
    execFileSync(process.execPath, [path.join(__dirname, "validate.js")], { stdio: "pipe" });
    return true;
  } catch (e) {
    return false;
  }
}

// ---------- the run ----------

function loadState() {
  try { return JSON.parse(fs.readFileSync(STATE, "utf8")); } catch { return {}; }
}

function setOutput(key, value) {
  if (process.env.GITHUB_OUTPUT) fs.appendFileSync(process.env.GITHUB_OUTPUT, `${key}=${value}\n`);
}

async function main() {
  const { file, text, city, venues } = readCity(CITY);
  const today = new Date();
  const cutoff = iso(new Date(today.getTime() - KEEP_CLOSED_DAYS * 86400000));
  const state = loadState();
  const prev = state[CITY] || {};

  console.log(`refresh: ${CITY} — ${venues.length} venues${OFFLINE ? " (offline)" : ""}`);

  // 1. Check every venue's page.
  const checks = OFFLINE
    ? venues.map((m) => ({ status: null, hash: prev[m.u]?.hash ?? null, length: 0 }))
    : await pool(venues, (m) => fetchPage(m.u));

  const unreachable = [], changed = [], redirected = [];
  const now = {};
  venues.forEach((m, i) => {
    const r = checks[i];
    if (OFFLINE) { now[m.u] = prev[m.u] || { hash: null, seen: iso(today) }; return; }
    if (r.status !== 200 || !r.hash) {
      unreachable.push({ n: m.n, u: m.u, status: r.status, error: r.error || "" });
      now[m.u] = prev[m.u] || { hash: null, seen: iso(today) };   // keep the last good hash
      return;
    }
    const before = prev[m.u];
    if (before && before.hash && before.hash !== r.hash) changed.push({ n: m.n, u: m.u });
    if (r.url && r.url.replace(/\/$/, "") !== m.u.replace(/\/$/, "")) redirected.push({ n: m.n, from: m.u, to: r.url });
    now[m.u] = { hash: r.hash, seen: iso(today) };
  });

  // 2. Things the data itself says need attention, whether or not a page moved.
  const soon = [], empty = [], undated = [];
  venues.forEach((m) => {
    const shows = m.shows || [];
    if (shows.length === 0) empty.push(m.n);
    shows.forEach((s) => {
      if (s.e && s.e >= iso(today) && (new Date(s.e) - today) / 86400000 <= 30) soon.push({ n: m.n, t: s.t, e: s.e });
      if (!s.e && !s.eText) undated.push({ n: m.n, t: s.t });
    });
  });
  soon.sort((a, b) => a.e.localeCompare(b.e));

  // 3. Drop exhibitions that closed more than a month ago, then prove the file
  //    still validates before keeping the edit.
  const pruned = pruneExpired(text, cutoff);
  let wrote = false;
  if (pruned.dropped.length && !DRY) {
    fs.writeFileSync(file, pruned.text);
    if (validates()) {
      wrote = true;
    } else {
      fs.writeFileSync(file, text);
      pruned.dropped.length = 0;
      console.error("prune reverted: the pruned file did not validate");
    }
  }

  // 4. The "checked on" date only moves when the scan found nothing to look at.
  //    Saying a city was checked when a dozen of its pages changed would be a lie.
  const needsAttention = unreachable.length + changed.length;
  if (!needsAttention && !DRY && !OFFLINE) {
    const en = today.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" });
    const zh = `${today.getUTCFullYear()} 年 ${today.getUTCMonth() + 1} 月 ${today.getUTCDate()} 日`;
    const src = fs.readFileSync(file, "utf8")
      .replace(/^(\s*updated: )"[^"]*"/m, `$1${JSON.stringify(en)}`)
      .replace(/^(\s*updatedz: )"[^"]*"/m, `$1${JSON.stringify(zh)}`);
    fs.writeFileSync(file, src);
    if (!validates()) { fs.writeFileSync(file, pruned.dropped.length ? pruned.text : text); }
    else wrote = true;
  }

  // 5. Record what the pages looked like, so next week can tell what moved.
  if (!DRY && !OFFLINE) {
    state[CITY] = now;
    fs.mkdirSync(path.dirname(STATE), { recursive: true });
    fs.writeFileSync(STATE, JSON.stringify(state, null, 1) + "\n");
  }

  // 6. The report. This is what the agent reads instead of the whole internet.
  const lines = [];
  const list = (title, rows, fmt) => {
    lines.push("", `## ${title} (${rows.length})`, "");
    if (!rows.length) lines.push("_none_");
    else rows.forEach((r) => lines.push("- " + fmt(r)));
  };
  lines.push(`# Weekly refresh — ${city.n}`, "",
    `- Scanned: ${iso(today)}${OFFLINE ? " (offline run, no pages fetched)" : ""}`,
    `- Venues: ${venues.length}`,
    `- Exhibitions after pruning: ${venues.reduce((a, m) => a + (m.shows || []).length, 0) - pruned.dropped.length}`,
    `- Checked-on date moved: ${!needsAttention && !DRY && !OFFLINE ? "yes" : "no"}`);
  list("Pages that changed since last week — re-read these", changed, (r) => `[${r.n}](${r.u})`);
  list("Unreachable", unreachable, (r) => `[${r.n}](${r.u}) — ${r.status || "no response"} ${r.error}`.trim());
  list("Redirected — the link in the data may be out of date", redirected, (r) => `${r.n}: ${r.from} → ${r.to}`);
  list("Dropped, closed over a month ago", pruned.dropped, (r) => `${r.t} (closed ${r.e})`);
  list("Closing within 30 days — confirm before they vanish", soon, (r) => `${r.n}: ${r.t} (closes ${r.e})`);
  list("No exhibition on file", empty.map((n) => ({ n })), (r) => r.n);
  list("No closing date on file", undated, (r) => `${r.n}: ${r.t}`);

  if (!DRY) {
    fs.mkdirSync(REPORTS, { recursive: true });
    fs.writeFileSync(path.join(REPORTS, `${CITY}.md`), lines.join("\n") + "\n");
  }

  console.log(`  ${changed.length} changed, ${unreachable.length} unreachable, ` +
              `${pruned.dropped.length} expired dropped, ${soon.length} closing soon`);
  setOutput("city", CITY);
  setOutput("city_name", city.n);
  setOutput("changed", String(changed.length));
  setOutput("unreachable", String(unreachable.length));
  setOutput("attention", String(needsAttention));
  setOutput("wrote", String(wrote));
  return 0;
}

main().then((c) => process.exit(c)).catch((e) => { console.error(e); process.exit(1); });
