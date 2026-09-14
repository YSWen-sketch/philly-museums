# Philadelphia Museum Exhibitions

A visitor's list of what is on show in Philadelphia right now: 42 museums, art galleries, historic houses and university galleries, with the special exhibitions each one currently advertises, their opening and closing dates, hours and admission prices.

**Live site: https://yswen-sketch.github.io/philly-museums/**

The page reads in **English or Chinese**, switchable in the top right corner. The choice is remembered in the browser, and `?lang=en` or `?lang=zh` links straight to one of them. A first-time visitor gets Chinese if their browser asks for Chinese, English otherwise. Exhibition titles stay in their official form in both languages so they can be searched for.

## How it works

- **Static page, no build step.** `index.html` holds the styling and logic; `data.js` holds every museum and exhibition. Closing countdowns and the "opening soon" tags are computed from the visitor's own clock when the page loads, so they never go stale on their own.
- **Automatic refresh every Thursday morning.** A scheduled Claude cloud agent follows [`scripts/WEEKLY.md`](scripts/WEEKLY.md): it opens each museum's official exhibitions page, reconciles `data.js` against it, runs the validator, appends to [`CHANGELOG.md`](CHANGELOG.md), and pushes to `main`. GitHub Pages republishes within a minute.
- **Every push is validated.** `node scripts/validate.js` runs in GitHub Actions and fails the build on a malformed field or date, so a single typo cannot blank out the page.

## Editing the data by hand

Everything lives in `data.js`.

Every visitor-facing string exists twice: the plain key holds English, the same key with a `z` suffix holds Chinese. Both are required, and the validator fails a field that has only one of them.

| Field | Meaning |
| --- | --- |
| `n` / `nz` | Museum name |
| `a` | Street address, not translated |
| `h` / `hz` | Opening hours |
| `p` / `pz` | Admission |
| `u` | Link to the museum's official exhibitions page |
| `free` | `true` if admission is free |
| `flag` / `flagz` | Museum-level notice, e.g. closed for reinstallation |
| `shows` | List of current and upcoming exhibitions |

Each exhibition takes `t` (the official title, not translated), `s` (opening date), `e` (closing date) and `d` / `dz` (a one-line description). Dates are `YYYY-MM-DD`. When a museum has not published an exact date, use `sText` / `sTextz` or `eText` / `eTextz` and write the wording instead, for example `eText: "Through November"` with `eTextz: "至 11 月"`.

Exhibitions that have already closed are hidden automatically; delete them once they are more than a month past to keep the file readable. The intro line, footer note and the "checked on" date sit at the top of the same file, each in both languages.

After editing, run `node scripts/validate.js`, add a line to `CHANGELOG.md`, then commit and push.

## Adjusting the automatic refresh

- The schedule lives at https://claude.ai/code/routines, where it can be paused, rescheduled, or run immediately.
- The rules the agent follows are entirely in `scripts/WEEKLY.md`. Edit that file to make it more or less conservative; the next run reads the new version.
