#!/usr/bin/env node
// Validates data.js before it reaches the published page.
//
// Checks that the file executes, that every required field is present in BOTH
// languages (plain key = English, key + "z" = Chinese), that dates are real
// YYYY-MM-DD dates, and that no unknown fields have crept in.
// Exits non-zero on any problem. Usage: node scripts/validate.js

const fs = require("fs");
const vm = require("vm");
const path = require("path");

const file = path.join(__dirname, "..", "data.js");
const src = fs.readFileSync(file, "utf8");
const ctx = {};
try {
  vm.runInNewContext(
    src + "\n;this.__out = { UPDATED, UPDATED_ZH, LEDE, LEDE_ZH, NOTE, NOTE_ZH, REPO, DATA, PLAIN, CLOSED };",
    ctx,
    { filename: "data.js" }
  );
} catch (e) {
  console.error("✗ data.js failed to execute: " + e.message);
  process.exit(1);
}

const d = ctx.__out;
const errors = [];
const isDate = (s) => typeof s === "string" && /^\d{4}-\d{2}-\d{2}$/.test(s) && !isNaN(new Date(s + "T00:00:00").getTime());
const str = (v) => typeof v === "string" && v.trim().length > 0;

// Top-level strings, each required in both languages.
[
  ["UPDATED", "UPDATED_ZH"],
  ["LEDE", "LEDE_ZH"],
  ["NOTE", "NOTE_ZH"],
].forEach(([en, zh]) => {
  if (!str(d[en])) errors.push(`${en} must be a non-empty string`);
  if (!str(d[zh])) errors.push(`${zh} must be a non-empty string`);
});
if (!/^https?:\/\//.test(d.REPO || "")) errors.push("REPO must be an http(s) URL");
if (!Array.isArray(d.DATA) || d.DATA.length === 0) errors.push("DATA must be a non-empty array");

// A field that must be present in English and in Chinese.
function pair(obj, key, where, required) {
  const en = obj[key], zh = obj[key + "z"];
  if (required && !str(en)) errors.push(`${where}: ${key} (English) missing`);
  if (required && !str(zh)) errors.push(`${where}: ${key}z (Chinese) missing`);
  if (!required) {
    if (en !== undefined && typeof en !== "string") errors.push(`${where}: ${key} must be a string`);
    if (zh !== undefined && typeof zh !== "string") errors.push(`${where}: ${key}z must be a string`);
    if (str(en) && !str(zh)) errors.push(`${where}: ${key} has no Chinese counterpart (${key}z)`);
    if (str(zh) && !str(en)) errors.push(`${where}: ${key}z has no English counterpart (${key})`);
  }
}

const MUSEUM_FIELDS = new Set(["n", "nz", "a", "h", "hz", "p", "pz", "u", "free", "flag", "flagz", "shows"]);
const SHOW_FIELDS = new Set(["t", "s", "e", "sText", "sTextz", "eText", "eTextz", "d", "dz"]);

let museums = 0, shows = 0;
(d.DATA || []).forEach((g, gi) => {
  const where = `DATA[${gi}]`;
  pair(g, "g", where, true);
  pair(g, "note", where, true);
  if (!Array.isArray(g.items)) { errors.push(`${where}.items must be an array`); return; }
  g.items.forEach((m, mi) => {
    museums++;
    const w = `${where}.items[${mi}] (${m.n || "?"})`;
    pair(m, "n", w, true);
    pair(m, "h", w, true);
    pair(m, "p", w, true);
    pair(m, "flag", w, false);
    if (!str(m.a)) errors.push(`${w}: a (address) missing`);
    if (!/^https?:\/\//.test(m.u || "")) errors.push(`${w}: u must be an http(s) URL`);
    if (m.free !== undefined && typeof m.free !== "boolean") errors.push(`${w}: free must be true or false`);
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

// PLAIN and CLOSED are lists of { n, nz, d, dz } with an optional u on PLAIN.
[["PLAIN", d.PLAIN, true], ["CLOSED", d.CLOSED, false]].forEach(([name, arr, wantsUrl]) => {
  if (!Array.isArray(arr)) { errors.push(`${name} must be an array`); return; }
  arr.forEach((row, i) => {
    const w = `${name}[${i}] (${(row && row.n) || "?"})`;
    if (!row || typeof row !== "object" || Array.isArray(row)) { errors.push(`${w} must be an object`); return; }
    pair(row, "n", w, true);
    pair(row, "d", w, true);
    if (wantsUrl && !/^https?:\/\//.test(row.u || "")) errors.push(`${w}: u must be an http(s) URL`);
    const allowed = new Set(["n", "nz", "d", "dz"].concat(wantsUrl ? ["u"] : []));
    Object.keys(row).filter((k) => !allowed.has(k)).forEach((k) => errors.push(`${w}: unknown field ${k}`));
  });
});

if (errors.length) {
  console.error(`✗ data.js has ${errors.length} problem(s):`);
  errors.forEach((e) => console.error("  - " + e));
  process.exit(1);
}
console.log(
  `✓ data.js is valid: ${d.DATA.length} groups, ${museums} venues, ${shows} exhibitions ` +
  `in both languages; checked ${d.UPDATED}`
);
