#!/usr/bin/env node
// Proves the weekly update actually works, without touching the real data or
// the network. It builds a throwaway copy of the repo, serves fake museum pages
// from localhost, and runs the real refresh against them: first scan, then a
// page that changed, then a page that went down.
//
// Usage: node scripts/smoke.js      (also runs in CI on every push)

const fs = require("fs");
const os = require("os");
const path = require("path");
const http = require("http");
const { execFileSync, execFile } = require("child_process");

let passed = 0, failed = 0;
function check(name, cond, detail) {
  if (cond) { passed++; console.log(`  ok   ${name}`); }
  else { failed++; console.log(`  FAIL ${name}${detail ? "\n         " + detail : ""}`); }
}
function eq(name, got, want) { check(name, got === want, `got ${JSON.stringify(got)}, want ${JSON.stringify(want)}`); }

// ---------- a throwaway copy of the project ----------

const T = fs.mkdtempSync(path.join(os.tmpdir(), "onview-smoke-"));
fs.mkdirSync(path.join(T, "scripts"));
fs.mkdirSync(path.join(T, "data"));
for (const f of ["refresh.js", "rotation.js", "validate.js"]) {
  fs.copyFileSync(path.join(__dirname, f), path.join(T, "scripts", f));
}

const DAY = 86400000;
const iso = (d) => d.toISOString().slice(0, 10);
const today = new Date();
const longGone = iso(new Date(today.getTime() - 90 * DAY));   // should be pruned
const justClosed = iso(new Date(today.getTime() - 5 * DAY));  // should survive
const closingSoon = iso(new Date(today.getTime() + 10 * DAY));
const nextYear = iso(new Date(today.getTime() + 300 * DAY));

// Fixture city. Uses the id "boston" so it passes the rotation's city check;
// nothing about the real Boston data is involved.
function fixture(urls) {
  return `CITIES.push({
  id: "boston",
  n: "Test City",
  nz: "测试城市",

  updated: "January 1, 2020",
  updatedz: "2020 年 1 月 1 日",

  lede: "A fixture.",
  ledez: "测试数据。",
  note: "A fixture.",
  notez: "测试数据。",

  groups: [
{ g: "Art", gz: "艺术",
  note: "Art venues.",
  notez: "艺术场馆。", items: [
  { n: "Alpha Museum", nz: "阿尔法博物馆", a: "1 Alpha Street",
    h: "Daily", hz: "每日", p: "Free", pz: "免费", u: ${JSON.stringify(urls[0])}, free: true,
    shows: [
      { t: "Long Gone Show", e: "${longGone}", d: "Closed months ago", dz: "早已闭幕" },
      { t: "Just Closed Show", e: "${justClosed}", d: "Closed last week", dz: "上周闭幕" },
      { t: "Closing Soon Show", e: "${closingSoon}", d: "Closing shortly", dz: "即将闭幕" }
    ] },
  { n: "Beta Gallery", nz: "贝塔画廊", a: "2 Beta Street",
    h: "Daily", hz: "每日", p: "Free", pz: "免费", u: ${JSON.stringify(urls[1])}, free: true,
    shows: [
      { t: "Only Show", e: "${longGone}", d: "Also long gone", dz: "同样早已闭幕" }
    ] },
  { n: "Gamma Centre", nz: "伽马中心", a: "3 Gamma Street",
    h: "Daily", hz: "每日", p: "Free", pz: "免费", u: ${JSON.stringify(urls[2])}, free: true,
    shows: [
      { t: "Open Ended Show", s: "${iso(today)}", eText: "Ongoing", eTextz: "长期展出", d: "No closing date", dz: "无闭幕日期" },
      { t: "Next Year Show", e: "${nextYear}", d: "Runs a while", dz: "长期展出" },
      { t: "No Date At All Show", d: "Never says when it ends", dz: "未说明闭幕日期" }
    ] }
]}
],

  plain: [],

  closed: []
});
`;
}

// ---------- fake museum pages ----------

let alphaBody = "<html><body><h1>Alpha Museum</h1><p>Closing Soon Show</p></body></html>";
const server = http.createServer((req, res) => {
  if (req.url.startsWith("/alpha")) { res.writeHead(200, { "content-type": "text/html" }); res.end(alphaBody); return; }
  if (req.url.startsWith("/beta"))  { res.writeHead(200, { "content-type": "text/html" }); res.end("<html><body>Beta, unchanging</body></html>"); return; }
  // Refuses anything identifying itself as a bot — the behaviour of roughly a
  // quarter of real museum sites.
  if (req.url.startsWith("/picky")) {
    if (/OnViewBot/.test(req.headers["user-agent"] || "")) { res.writeHead(403); res.end("no bots"); return; }
    res.writeHead(200, { "content-type": "text/html" }); res.end("<html><body>Picky museum, open to browsers</body></html>");
    return;
  }
  res.writeHead(404); res.end("no");
});

// Must not block: the fixture server lives in this process, so a synchronous
// child would starve the very pages the child is trying to fetch.
function run(extraArgs = []) {
  const outFile = path.join(T, "gh_output");
  fs.writeFileSync(outFile, "");
  return new Promise((resolve, reject) => {
    execFile(process.execPath, [path.join(T, "scripts", "refresh.js"), "boston", ...extraArgs],
      { env: { ...process.env, GITHUB_OUTPUT: outFile }, encoding: "utf8" },
      (err, stdout) => err ? reject(err) : resolve(collect(outFile, stdout)));
  });
}

function collect(outFile, stdout) {
  const out = {};
  fs.readFileSync(outFile, "utf8").split("\n").filter(Boolean).forEach((l) => {
    const i = l.indexOf("="); out[l.slice(0, i)] = l.slice(i + 1);
  });
  return { out, stdout };
}

const dataFile = path.join(T, "data", "boston.js");
const reportFile = path.join(T, "reports", "boston.md");
const read = (f) => fs.readFileSync(f, "utf8");

(async function main() {
  await new Promise((r) => server.listen(0, "127.0.0.1", r));
  const port = server.address().port;
  const base = `http://127.0.0.1:${port}`;
  // Gamma points at the discard port: refused immediately, so "unreachable"
  // is exercised without depending on anything outside this machine.
  const urls = [`${base}/alpha`, `${base}/beta`, "http://127.0.0.1:9/gamma"];

  console.log("rotation");
  const { cityForWeek, ORDER, nextTurn } = require(path.join(T, "scripts", "rotation.js"));
  const thursdays = [];
  const d = new Date(Date.UTC(2026, 0, 1));
  for (let i = 0; i < 4; i++) { thursdays.push(cityForWeek(d)); d.setUTCDate(d.getUTCDate() + 7); }
  check("four weeks cover all four cities", new Set(thursdays).size === 4, thursdays.join(", "));
  eq("priority order is Philadelphia, New York, DC, Boston", thursdays.join(","), ORDER.join(","));
  const dec = cityForWeek(new Date(Date.UTC(2026, 11, 31)));
  const jan = cityForWeek(new Date(Date.UTC(2027, 0, 7)));
  eq("the cycle carries on across a year boundary rather than resetting",
     jan, ORDER[(ORDER.indexOf(dec) + 1) % ORDER.length]);
  check("every city comes round within 28 days",
    ORDER.every((c) => (nextTurn(c, new Date(Date.UTC(2026, 5, 1))) - Date.UTC(2026, 5, 1)) / DAY <= 28));

  console.log("\nfirst scan (all pages reachable, nothing seen before)");
  fs.writeFileSync(dataFile, fixture(urls));
  let r = await run();
  eq("city reported", r.out.city, "boston");
  eq("nothing counts as changed on a first scan", r.out.changed, "0");
  eq("the refused page is reported unreachable", r.out.unreachable, "1");
  let text = read(dataFile);
  check("the show that closed 90 days ago is gone", !text.includes("Long Gone Show"));
  check("the show that closed 5 days ago is kept", text.includes("Just Closed Show"));
  check("an emptied exhibition list becomes shows: []", /shows: \[\] \},/.test(text));
  check("the file still validates after pruning", (() => {
    try { execFileSync(process.execPath, [path.join(T, "scripts", "validate.js")], { stdio: "pipe", cwd: T }); return true; }
    catch { return false; }
  })());
  check("the report was written", fs.existsSync(reportFile));
  const rep = read(reportFile);
  check("the report names the unreachable venue", rep.includes("Gamma Centre"));
  check("the report lists what was dropped", rep.includes("Long Gone Show"));
  check("the report flags what closes within 30 days", rep.includes("Closing Soon Show"));
  check("the report flags an exhibition with no closing date", rep.includes("No Date At All Show"));
  check("the checked-on date does not move while a page is unreachable",
    text.includes('updated: "January 1, 2020"'));

  console.log("\nsecond scan (a page's text changed)");
  alphaBody = "<html><body><h1>Alpha Museum</h1><p>A Brand New Show</p></body></html>";
  r = await run();
  eq("the changed page is detected", r.out.changed, "1");
  check("the report names the changed venue", read(reportFile).includes("Alpha Museum"));

  console.log("\nthird scan (nothing changed, but one page is still down)");
  r = await run();
  eq("an unchanged page is not reported as changed", r.out.changed, "0");
  check("the date still does not move while a page is down",
    read(dataFile).includes('updated: "January 1, 2020"'));

  console.log("\na site that refuses robots");
  fs.writeFileSync(dataFile, fixture([`${base}/alpha`, `${base}/beta`, `${base}/picky`]));
  r = await run();
  eq("a 403 to the bot is retried with a browser header and succeeds", r.out.unreachable, "0");

  console.log("\nfourth scan (every page reachable and unchanged)");
  fs.writeFileSync(dataFile, fixture([`${base}/alpha`, `${base}/beta`, `${base}/beta`]));
  await run();    // re-record hashes for the swapped-in URL
  r = await run();
  eq("nothing needs attention", r.out.attention, "0");
  check("now the checked-on date moves", !read(dataFile).includes('updated: "January 1, 2020"'));
  check("the Chinese date moved too", !read(dataFile).includes('updatedz: "2020 年 1 月 1 日"'));

  console.log("\ndry run");
  const before = read(dataFile);
  r = await run(["--dry-run"]);
  eq("a dry run leaves the data untouched", read(dataFile), before);

  console.log("\nthe validator actually rejects bad data");
  const good = read(dataFile);
  const bad = [
    ["a missing Chinese field", good.replace(/nz: "阿尔法博物馆", /, "")],
    ["a malformed date", good.replace(/e: "\d{4}-\d{2}-\d{2}"/, 'e: "not-a-date"')],
    ["an unknown field", good.replace(/a: "1 Alpha Street"/, 'a: "1 Alpha Street", wat: 1')],
  ];
  for (const [name, src] of bad) {
    fs.writeFileSync(dataFile, src);
    let rejected = false;
    try { execFileSync(process.execPath, [path.join(T, "scripts", "validate.js")], { stdio: "pipe", cwd: T }); }
    catch { rejected = true; }
    check(`the validator rejects ${name}`, rejected);
  }
  fs.writeFileSync(dataFile, good);

  server.close();
  fs.rmSync(T, { recursive: true, force: true });
  console.log(`\n${passed} passed, ${failed} failed`);
  process.exit(failed ? 1 : 0);
})().catch((e) => { console.error(e); server.close(); process.exit(1); });
