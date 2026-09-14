#!/usr/bin/env node
// Keeps a running record of how much the project is read, and renders it into
// the README between the traffic markers.
//
// The numbers come from GitHub's own traffic API, so nothing about a visitor
// reaches a third party and no tracking script goes on the page. The trade-off
// is that GitHub only keeps the last 14 days and only counts the repository,
// not the published site — so this script accumulates each day's figures into
// state/traffic.json and the total grows from the day it started running.
//
// Usage: GITHUB_TOKEN=... node scripts/traffic.js [owner/repo]

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const STORE = path.join(ROOT, "state", "traffic.json");
const README = path.join(ROOT, "README.md");
const REPO = process.argv[2] || process.env.GITHUB_REPOSITORY || "YSWen-sketch/philly-museums";
const TOKEN = process.env.GITHUB_TOKEN || process.env.GH_TOKEN;

async function api(p) {
  const res = await fetch(`https://api.github.com/repos/${REPO}/traffic/${p}`, {
    headers: {
      accept: "application/vnd.github+json",
      "user-agent": "on-view-traffic",
      ...(TOKEN ? { authorization: `Bearer ${TOKEN}` } : {}),
    },
  });
  if (!res.ok) throw new Error(`${p}: ${res.status} ${res.statusText}`);
  return res.json();
}

// Day records are merged, never summed, so re-running on the same day cannot
// double-count and a missed day is simply filled in next time.
function merge(store, key, rows) {
  store[key] = store[key] || {};
  for (const r of rows) {
    const day = r.timestamp.slice(0, 10);
    store[key][day] = { c: r.count, u: r.uniques };
  }
}

// A sparkline drawn as a path, so the README needs no image host and the file
// stays a few hundred bytes.
function sparkline(days, values, w = 640, h = 80, pad = 4) {
  const max = Math.max(1, ...values);
  const step = values.length > 1 ? (w - pad * 2) / (values.length - 1) : 0;
  const x = (i) => pad + i * step;
  const y = (v) => h - pad - (v / max) * (h - pad * 2);
  const line = values.map((v, i) => `${i ? "L" : "M"}${x(i).toFixed(1)} ${y(v).toFixed(1)}`).join(" ");
  const area = `${line} L${x(values.length - 1).toFixed(1)} ${h - pad} L${x(0).toFixed(1)} ${h - pad} Z`;
  const dots = values.map((v, i) => `<circle cx="${x(i).toFixed(1)}" cy="${y(v).toFixed(1)}" r="1.8" fill="#1F5C5A"/>`).join("");
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" role="img" aria-label="Daily repository views, ${days[0]} to ${days[days.length - 1]}, peak ${max}">
  <rect width="${w}" height="${h}" fill="#F5F6F2"/>
  <path d="${area}" fill="#1F5C5A" fill-opacity="0.12"/>
  <path d="${line}" fill="none" stroke="#1F5C5A" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round"/>
  ${dots}
</svg>
`;
}

const nf = (n) => n.toLocaleString("en-US");

async function main() {
  let store = {};
  try { store = JSON.parse(fs.readFileSync(STORE, "utf8")); } catch {}

  try {
    const [views, clones] = await Promise.all([api("views"), api("clones")]);
    merge(store, "views", views.views || []);
    merge(store, "clones", clones.clones || []);
    store.updated = new Date().toISOString().slice(0, 10);
  } catch (e) {
    // A missing permission or a rate limit should not fail the build; the
    // README simply keeps the numbers it already has.
    console.error(`traffic: could not read GitHub traffic (${e.message}); rendering from stored history`);
    if (!store.views) { console.error("traffic: no history stored yet, nothing to render"); return 0; }
  }

  fs.mkdirSync(path.dirname(STORE), { recursive: true });
  fs.writeFileSync(STORE, JSON.stringify(store, null, 1) + "\n");

  const days = Object.keys(store.views || {}).sort();
  if (!days.length) return 0;
  const recent = days.slice(-30);
  const values = recent.map((d) => store.views[d].c);
  const totalViews = days.reduce((a, d) => a + store.views[d].c, 0);
  const totalUniq = days.reduce((a, d) => a + store.views[d].u, 0);
  const totalClones = Object.values(store.clones || {}).reduce((a, v) => a + v.c, 0);
  const last14 = days.slice(-14).reduce((a, d) => a + store.views[d].c, 0);

  fs.mkdirSync(path.join(ROOT, "assets"), { recursive: true });
  fs.writeFileSync(path.join(ROOT, "assets", "traffic.svg"), sparkline(recent, values));

  const block = [
    `![Daily views](assets/traffic.svg)`,
    ``,
    `| Since | Views | Unique visitors | Last 14 days | Clones |`,
    `| --- | ---: | ---: | ---: | ---: |`,
    `| ${days[0]} | ${nf(totalViews)} | ${nf(totalUniq)} | ${nf(last14)} | ${nf(totalClones)} |`,
    ``,
    `<sub>Repository traffic from GitHub's own API, recorded daily — no analytics script runs on the site and nothing about a visitor leaves GitHub. GitHub keeps only 14 days, so the totals above count from the first day this was recorded.</sub>`,
  ].join("\n");

  const md = fs.readFileSync(README, "utf8");
  const re = /(<!-- traffic:start -->)[\s\S]*?(<!-- traffic:end -->)/;
  if (!re.test(md)) { console.error("traffic: README has no traffic markers"); return 1; }
  fs.writeFileSync(README, md.replace(re, `$1\n${block}\n$2`));

  console.log(`traffic: ${nf(totalViews)} views over ${days.length} recorded days (${nf(last14)} in the last 14)`);
  return 0;
}

main().then((c) => process.exit(c)).catch((e) => { console.error(e); process.exit(1); });
