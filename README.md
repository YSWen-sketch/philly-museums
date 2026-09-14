# East Coast Museum Exhibitions

A visitor's list of what is on show right now in **Philadelphia, New York, Washington and Boston**: 356 museums, art galleries, historic houses and university galleries, with the 859 special exhibitions they are currently advertising, plus opening and closing dates, hours and admission prices.

**Live site: https://yswen-sketch.github.io/philly-museums/**

The page reads in **English or Chinese**, switchable in the top right corner, and shows **one city at a time**, chosen from the tabs at the top. Both choices are remembered in the browser, and `?lang=en&city=boston` links straight to a particular view. A first-time visitor gets Chinese if their browser asks for Chinese, English otherwise. Exhibition titles stay in their official form in both languages so they can be searched for.

## How it works

- **Static page, no build step.** `index.html` holds the styling and logic. Each city is one self-contained file in [`data/`](data/) that pushes an object onto `CITIES`; the page loads them all and lets the reader switch. Closing countdowns and the "opening soon" tags are computed from the visitor's own clock when the page loads, so they never go stale on their own.
- **Automatic refresh every Thursday morning.** A scheduled Claude cloud agent follows [`scripts/WEEKLY.md`](scripts/WEEKLY.md): it opens each museum's official exhibitions page, reconciles the city files against it, runs the validator, appends to [`CHANGELOG.md`](CHANGELOG.md), and pushes to `main`. GitHub Pages republishes within a minute.
- **Every push is validated.** `node scripts/validate.js` runs in GitHub Actions and fails the build on a malformed date, a missing field, or a field that exists in only one language, so a single typo cannot blank out the page.

## What is covered

| City | Venues | Exhibitions |
| --- | ---: | ---: |
| Philadelphia | 124 | 169 |
| New York | 96 | 330 |
| Washington | 71 | 225 |
| Boston | 65 | 135 |

Each city's list was built by scanning the places exhibitions actually get announced — the Wikipedia museum lists, the city tourism boards, the local arts press, the museum-association and consortium directories, and the university and library gallery programmes — and then reading each venue's own website. Commercial galleries that sell work are deliberately excluded, as are zoos, aquariums with no rotating programme, and attractions that are not museums.

Venues outside the city proper are included where a visitor would plausibly make the trip, with the travel time written into the venue's notice line. Where a museum's website blocks automated reading or publishes no dates, the entry says so rather than guessing.

## Adding a city

Copy any file in `data/` to `data/<city>.js`, change the `id`, the bilingual name, intro and footer note, and replace the venue groups. Then add one `<script src="data/<city>.js"></script>` line to `index.html` next to the others. Tabs appear in that order. Nothing else needs to change, and the validator will tell you what is missing.

## Editing the data by hand

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

A city file also carries `plain` (venues with only a permanent collection) and `closed` (venues that have shut for good). Exhibitions that have already closed are hidden automatically; delete them once they are more than a month past to keep the file readable. Each city's intro line, footer note and "checked on" date sit at the top of its own file, in both languages.

After editing, run `node scripts/validate.js`, add a line to `CHANGELOG.md`, then commit and push.

## Adjusting the automatic refresh

- The schedule lives at https://claude.ai/code/routines, where it can be paused, rescheduled, or run immediately.
- The rules the agent follows are entirely in `scripts/WEEKLY.md`. Edit that file to make it more or less conservative; the next run reads the new version.
