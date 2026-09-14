#!/usr/bin/env node
// Validates every city file in data/ before it reaches the published page.
//
// Checks that each file executes, that every required field is present in BOTH
// languages (plain key = English, key + "z" = Chinese), that dates are real
// YYYY-MM-DD dates, and that no unknown fields have crept in.
// Exits non-zero on any problem. Usage: node scripts/validate.js

const fs = require("fs");
const vm = require("vm");
const path = require("path");

const root = path.join(__dirname, "..");
const dir = path.join(root, "data");
const files = fs.readdirSync(dir).filter((f) => f.endsWith(".js")).sort();

if (files.length === 0) {
  console.error("✗ no city files found in data/");
  process.exit(1);
}

// Load every city file into one shared CITIES array, the way the page does.
const sandbox = { CITIES: [] };
vm.createContext(sandbox);
for (const f of files) {
  try {
    vm.runInContext(fs.readFileSync(path.join(dir, f), "utf8"), sandbox, { filename: "data/" + f });
  } catch (e) {
    console.error(`✗ data/${f} failed to execute: ${e.message}`);
    process.exit(1);
  }
}

const errors = [];
const isDate = (s) => typeof s === "string" && /^\d{4}-\d{2}-\d{2}$/.test(s) && !isNaN(new Date(s + "T00:00:00").getTime());
const str = (v) => typeof v === "string" && v.trim().length > 0;
const isUrl = (v) => typeof v === "string" && /^https?:\/\//.test(v);

// A field that must be present in English and in Chinese.
function pair(obj, key, where, required) {
  const en = obj[key], zh = obj[key + "z"];
  if (required) {
    if (!str(en)) errors.push(`${where}: ${key} (English) missing`);
    if (!str(zh)) errors.push(`${where}: ${key}z (Chinese) missing`);
    return;
  }
  if (en !== undefined && typeof en !== "string") errors.push(`${where}: ${key} must be a string`);
  if (zh !== undefined && typeof zh !== "string") errors.push(`${where}: ${key}z must be a string`);
  if (str(en) && !str(zh)) errors.push(`${where}: ${key} has no Chinese counterpart (${key}z)`);
  if (str(zh) && !str(en)) errors.push(`${where}: ${key}z has no English counterpart (${key})`);
}

const CITY_FIELDS = new Set(["id", "n", "nz", "updated", "updatedz", "lede", "ledez", "note", "notez", "groups", "plain", "closed"]);
const MUSEUM_FIELDS = new Set(["n", "nz", "a", "h", "hz", "p", "pz", "u", "free", "flag", "flagz", "shows"]);
const SHOW_FIELDS = new Set(["t", "s", "e", "sText", "sTextz", "eText", "eTextz", "d", "dz"]);

const seenIds = new Set();
const totals = [];

sandbox.CITIES.forEach((c, ci) => {
  const where = `CITIES[${ci}] (${c.id || "?"})`;
  if (!/^[a-z][a-z0-9-]*$/.test(c.id || "")) errors.push(`${where}: id must be lowercase letters, digits and hyphens`);
  if (seenIds.has(c.id)) errors.push(`${where}: duplicate city id`);
  seenIds.add(c.id);
  pair(c, "n", where, true);
  pair(c, "updated", where, true);
  pair(c, "lede", where, true);
  pair(c, "note", where, true);
  Object.keys(c).filter((k) => !CITY_FIELDS.has(k)).forEach((k) => errors.push(`${where}: unknown field ${k}`));
  if (!Array.isArray(c.groups) || c.groups.length === 0) { errors.push(`${where}: groups must be a non-empty array`); return; }

  let museums = 0, shows = 0;
  const names = new Set();

  c.groups.forEach((g, gi) => {
    const gw = `${where}.groups[${gi}]`;
    pair(g, "g", gw, true);
    pair(g, "note", gw, true);
    if (!Array.isArray(g.items)) { errors.push(`${gw}.items must be an array`); return; }
    g.items.forEach((m, mi) => {
      museums++;
      const w = `${c.id} ${g.g}[${mi}] "${m.n || "?"}"`;
      pair(m, "n", w, true);
      pair(m, "h", w, true);
      pair(m, "p", w, true);
      pair(m, "flag", w, false);
      if (!str(m.a)) errors.push(`${w}: a (address) missing`);
      if (!isUrl(m.u)) errors.push(`${w}: u must be an http(s) URL`);
      if (m.free !== undefined && typeof m.free !== "boolean") errors.push(`${w}: free must be true or false`);
      if (names.has(m.n)) errors.push(`${w}: duplicate venue name within ${c.id}`);
      names.add(m.n);
      Object.keys(m).filter((k) => !MUSEUM_FIELDS.has(k)).forEach((k) => errors.push(`${w}: unknown field ${k}`));
      if (!Array.isArray(m.shows)) { errors.push(`${w}: shows must be an array`); return; }
      m.shows.forEach((s, si) => {
        shows++;
        const ws = `${w} shows[${si}] "${s.t || "?"}"`;
        if (!str(s.t)) errors.push(`${ws}: t (title) missing`);
        if (s.s !== undefined && !isDate(s.s)) errors.push(`${ws}: s (opening date) must be YYYY-MM-DD, got ${JSON.stringify(s.s)}`);
        if (s.e !== undefined && !isDate(s.e)) errors.push(`${ws}: e (closing date) must be YYYY-MM-DD, got ${JSON.stringify(s.e)}`);
        if (s.s && s.e && s.e < s.s) errors.push(`${ws}: closing date is before the opening date`);
        pair(s, "d", ws, false);
        pair(s, "sText", ws, false);
        pair(s, "eText", ws, false);
        if (s.s && s.sText) errors.push(`${ws}: has both s and sText; use one`);
        if (s.e && s.eText) errors.push(`${ws}: has both e and eText; use one`);
        Object.keys(s).filter((k) => !SHOW_FIELDS.has(k)).forEach((k) => errors.push(`${ws}: unknown field ${k}`));
      });
    });
  });

  // plain and closed are lists of { n, nz, d, dz }, with a u required on plain.
  [["plain", c.plain, true], ["closed", c.closed, false]].forEach(([name, arr, wantsUrl]) => {
    if (arr === undefined) return;
    if (!Array.isArray(arr)) { errors.push(`${where}.${name} must be an array`); return; }
    arr.forEach((row, i) => {
      const w = `${c.id} ${name}[${i}] "${(row && row.n) || "?"}"`;
      if (!row || typeof row !== "object" || Array.isArray(row)) { errors.push(`${w}: must be an object`); return; }
      pair(row, "n", w, true);
      pair(row, "d", w, true);
      if (wantsUrl && !isUrl(row.u)) errors.push(`${w}: u must be an http(s) URL`);
      const allowed = new Set(["n", "nz", "d", "dz"].concat(wantsUrl ? ["u"] : []));
      Object.keys(row).filter((k) => !allowed.has(k)).forEach((k) => errors.push(`${w}: unknown field ${k}`));
    });
  });

  totals.push({ id: c.id, museums, shows, plain: (c.plain || []).length, closed: (c.closed || []).length, updated: c.updated });
});

if (errors.length) {
  console.error(`✗ ${errors.length} problem(s) across ${files.length} city file(s):`);
  errors.forEach((e) => console.error("  - " + e));
  process.exit(1);
}
console.log(`✓ ${sandbox.CITIES.length} cities valid, both languages throughout:`);
totals.forEach((t) =>
  console.log(`   ${t.id.padEnd(14)} ${String(t.museums).padStart(3)} venues, ${String(t.shows).padStart(3)} exhibitions, ` +
              `${t.plain} permanent, ${t.closed} closed — checked ${t.updated}`));
