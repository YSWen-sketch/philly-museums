# 费城博物馆特展一览

给普通人的费城看展清单：50 余家博物馆、美术馆、历史宅邸与大学画廊，各家官网目前挂出的特展、开闭幕日期、开馆时间和票价。

**在线地址：https://yswen-sketch.github.io/philly-museums/**

## 它是怎么运转的

- 纯静态页面：`index.html` 负责样式和逻辑，`data.js` 存所有博物馆和展览数据。闭幕倒计时、"即将开幕"标签在打开页面时按当天日期计算，不用手动改。
- **每周四早上自动更新**：一个 Claude 云端定时程序按 [`scripts/WEEKLY.md`](scripts/WEEKLY.md) 的流程，逐馆打开官网展览页核对，改完 `data.js` 后运行校验、写 [`CHANGELOG.md`](CHANGELOG.md)、推送到 `main`。GitHub Pages 随即重新发布。
- 每次推送都会跑 `node scripts/validate.js`（见 Actions 页面），字段或日期格式有问题会标红，页面不会因为一处笔误整体空白。

## 手动改数据

只改 `data.js`：

- 每个馆是一个对象：`n` 名称、`a` 地址、`h` 开馆时间、`p` 票价、`u` 官网展览页链接、`free: true` 表示免费、`flag` 是馆级提示（闭馆换展之类）。
- 每个展览：`t` 标题、`s` 开幕日期、`e` 闭幕日期（都是 `YYYY-MM-DD`）、`d` 一句话说明。日期不确定时用 `sText` / `eText` 写文字，比如 `eText: "至 11 月"`。
- 已结束的展览页面会自动隐藏，闭幕超过一个月的可以删掉保持文件干净。
- 页首导语 `LEDE`、页脚提示 `NOTE`、核对日期 `UPDATED` 也在这个文件顶部。
- 改完在 `CHANGELOG.md` 顶部记一行，然后提交推送即可。

## 调整自动更新

- 定时程序在 https://claude.ai/code/routines 管理，可以暂停、改时间、或点"立即运行"。
- 核对规则全在 `scripts/WEEKLY.md`，想让它更保守或更激进，改这个文件就行，下次运行会读新版本。
