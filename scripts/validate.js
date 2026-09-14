#!/usr/bin/env node
// 校验 data.js：能否被浏览器执行、字段类型、日期格式。任何一项失败都以非零退出。
// 用法：node scripts/validate.js
const fs = require("fs");
const vm = require("vm");
const path = require("path");

const file = path.join(__dirname, "..", "data.js");
const src = fs.readFileSync(file, "utf8");
const ctx = {};
try {
  vm.runInNewContext(src + "\n;this.__out = { UPDATED, LEDE, NOTE, DATA, PLAIN, CLOSED };", ctx, { filename: "data.js" });
} catch (e) {
  console.error("✗ data.js 无法执行：" + e.message);
  process.exit(1);
}
const { UPDATED, LEDE, NOTE, DATA, PLAIN, CLOSED } = ctx.__out;
const errors = [];
const isDate = (s) => typeof s === "string" && /^\d{4}-\d{2}-\d{2}$/.test(s) && !isNaN(new Date(s + "T00:00:00").getTime());
const str = (v) => typeof v === "string" && v.trim().length > 0;

if (!str(UPDATED)) errors.push("UPDATED 必须是非空字符串");
if (!str(LEDE)) errors.push("LEDE 必须是非空字符串");
if (typeof NOTE !== "string") errors.push("NOTE 必须是字符串（可为空）");
if (!Array.isArray(DATA) || DATA.length === 0) errors.push("DATA 必须是非空数组");

let museums = 0, shows = 0;
(DATA || []).forEach((g, gi) => {
  const where = `DATA[${gi}]`;
  if (!str(g.g)) errors.push(`${where}.g 分组名缺失`);
  if (typeof g.note !== "string") errors.push(`${where}.note 必须是字符串`);
  if (!Array.isArray(g.items)) { errors.push(`${where}.items 必须是数组`); return; }
  g.items.forEach((m, mi) => {
    museums++;
    const w = `${where}.items[${mi}] (${m.n || "?"})`;
    if (!str(m.n)) errors.push(`${w}: n 馆名缺失`);
    if (!str(m.a)) errors.push(`${w}: a 地址缺失`);
    if (!str(m.h)) errors.push(`${w}: h 开馆时间缺失`);
    if (!str(m.p)) errors.push(`${w}: p 票价缺失`);
    if (m.u !== undefined && !/^https?:\/\//.test(m.u)) errors.push(`${w}: u 必须是 http(s) 链接`);
    if (m.free !== undefined && typeof m.free !== "boolean") errors.push(`${w}: free 必须是 true/false`);
    if (m.flag !== undefined && typeof m.flag !== "string") errors.push(`${w}: flag 必须是字符串`);
    if (!Array.isArray(m.shows)) { errors.push(`${w}: shows 必须是数组`); return; }
    m.shows.forEach((s, si) => {
      shows++;
      const ws = `${w} shows[${si}]`;
      if (!str(s.t)) errors.push(`${ws}: t 标题缺失`);
      if (s.s !== undefined && !isDate(s.s)) errors.push(`${ws}: s 开幕日期格式应为 YYYY-MM-DD，得到 ${JSON.stringify(s.s)}`);
      if (s.e !== undefined && !isDate(s.e)) errors.push(`${ws}: e 闭幕日期格式应为 YYYY-MM-DD，得到 ${JSON.stringify(s.e)}`);
      if (s.s && s.e && s.e < s.s) errors.push(`${ws}: 闭幕日期早于开幕日期`);
      if (s.sText !== undefined && typeof s.sText !== "string") errors.push(`${ws}: sText 必须是字符串`);
      if (s.eText !== undefined && typeof s.eText !== "string") errors.push(`${ws}: eText 必须是字符串`);
      if (s.d !== undefined && typeof s.d !== "string") errors.push(`${ws}: d 必须是字符串`);
      const known = new Set(["t", "s", "e", "sText", "eText", "d"]);
      Object.keys(s).filter((k) => !known.has(k)).forEach((k) => errors.push(`${ws}: 未知字段 ${k}`));
    });
  });
});
[["PLAIN", PLAIN], ["CLOSED", CLOSED]].forEach(([name, arr]) => {
  if (!Array.isArray(arr)) { errors.push(`${name} 必须是数组`); return; }
  arr.forEach((row, i) => {
    if (!Array.isArray(row) || row.length !== 2 || !str(row[0]) || !str(row[1])) errors.push(`${name}[${i}] 应为 [名称, 说明] 两个字符串`);
  });
});

if (errors.length) {
  console.error(`✗ data.js 有 ${errors.length} 处问题：`);
  errors.forEach((e) => console.error("  - " + e));
  process.exit(1);
}
console.log(`✓ data.js 通过校验：${DATA.length} 组，${museums} 家馆，${shows} 个展览；核对日期 ${UPDATED}`);
