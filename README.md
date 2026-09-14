# On View · 东岸看展

A visitor's list of what is on show right now in **Philadelphia, New York, Washington and Boston**: 1402 museums, art galleries, historic houses and university galleries, with the 1886 exhibitions and permanent displays they are currently showing, plus opening and closing dates, hours and admission prices.

The site is called **On View** in English and **东岸看展** in Chinese.

**Live site: https://yswen-sketch.github.io/philly-museums/**

The page reads in **English or Chinese**, switchable in the top right corner, and shows **one city at a time**, chosen from the tabs under the title, each showing how many venues it holds. Both choices are remembered in the browser, and `?lang=en&city=boston` links straight to a particular view. A first-time visitor gets Chinese if their browser asks for Chinese, English otherwise. Exhibition titles stay in their official form in both languages so they can be searched for.

## How it works

- **Static page, no build step.** `index.html` holds the styling and logic, including the masthead, the city tabs, the per-city figures, the closing-soon and opening-soon panels, the search and filter bar, and the jump links to each group. Each city is one self-contained file in [`data/`](data/) that pushes an object onto `CITIES`; the page loads them all and lets the reader switch. Closing countdowns and the "opening soon" tags are computed from the visitor's own clock when the page loads, so they never go stale on their own.
- **One city a week, each city monthly.** Reconciling 350-odd venues at once produces four skimmed cities instead of one correct one, so the update takes a single city per week in the order Philadelphia, New York, Washington, Boston. The cycle is anchored to a fixed Thursday rather than the calendar, so it never resets or skips: `node scripts/rotation.js` prints whose turn it is, and `node scripts/rotation.js 2026-11-19` answers for any date.
- **The refresh is mechanical first, and only then a model.** Every Thursday at 07:00 New York time, [`scripts/refresh.js`](scripts/refresh.js) runs in GitHub Actions with no model involved. It opens every venue's page for that week's city, notes which pages' visible text changed since last week and which would not load, drops exhibitions that closed more than a month ago, and writes `reports/<city>.md` naming only what needs judgement. Two hours later the scheduled Claude agent follows [`scripts/WEEKLY.md`](scripts/WEEKLY.md) and starts from that report rather than from the open web — so it reads the handful of pages that actually moved instead of a hundred and twenty that did not.
- **It still works when the agent does not.** The mechanical half is the fallback, not a preamble to it. If the agent is paused, broken, or out of quota, the Thursday job has still pruned the dead exhibitions, refused to advance the "checked on" date it did not earn, and filed a GitHub issue containing the report. The site degrades into being slightly out of date rather than silently wrong.
- **Nothing ships unless it is proven.** `npm test` runs the validator and [`scripts/smoke.js`](scripts/smoke.js), and both run on every push and again before every scheduled refresh. The smoke test is not a mock: it builds a throwaway copy of the project, serves fake museum pages from localhost, and drives the real refresh through a first scan, a page whose text changes, a page that goes down, and a week where nothing moved — checking at each step that the right thing was pruned, reported, and dated. It also feeds the validator deliberately broken data to confirm it still says no.

## What counts as a venue

One standard, applied to every city. It is also stated on the page itself, under the figures line, so a reader can see what they are looking at.

**Included**

- Museums, galleries, historic houses, and university and library galleries with a physical exhibition space a visitor can walk into.
- Venues open on a published schedule, or by an appointment anyone can book.
- Anywhere within about 45 minutes of the city centre. Venues outside the city proper carry the travel time in their notice line.
- Free and ticketed venues alike, with the admission written out.

**Not included**

- Commercial galleries that sell the work on their walls.
- Places that are really an office, an archive, an events or rental space, or a shop.
- Performance venues whose only art hangs in the lobby.
- Zoos, aquariums and nature reserves with no rotating exhibition programme.
- For-profit themed attractions: wax museums, immersive light shows, haunted-house experiences.
- Venues that have closed, or that are shut with no announced reopening.

**Where the data comes from**

- Each city's list was built by scanning the channels where exhibitions get announced — museum directories, city tourism boards, the local arts press, museum-association rosters, and university and library gallery programmes — and then reading every venue's own website.
- Dates are only ever what the museum itself publishes. Where it has not published one, the entry repeats the museum's own wording rather than guessing a date.
- Some museum sites block automated reading. Those entries say so and may be less current than the rest.

The standard exists because the first pass did not have one. Philadelphia was audited exhaustively while the other three cities were given venue targets, which left Philadelphia looking larger than New York — an artefact of how the lists were built, not a fact about the cities.

All four cities have now been swept against this bar without a cap, which roughly quadrupled the list and reversed the picture: New York, the city that looked smallest, has the most venues by a wide margin. Philadelphia was swept last, since re-auditing its existing list was not the same as looking for what the list never had. 84 candidates were examined and excluded under the rules above, each with a recorded reason.

## What is covered

| City | Venues | Exhibitions |
| --- | ---: | ---: |
| Philadelphia | 392 | 405 |
| New York | 504 | 819 |
| Washington | 222 | 334 |
| Boston | 284 | 328 |

## How much this gets read

<!-- traffic:start -->
_Recorded from the first day the traffic job ran; the table appears here once it has._
<!-- traffic:end -->

## Adding a city

Copy any file in `data/` to `data/<city>.js`, change the `id`, the bilingual name, intro and footer note, and replace the venue groups. Then add one `<script src="data/<city>.js"></script>` line to `index.html` next to the others. Tabs appear in that order. Nothing else needs to change, and the validator will tell you what is missing.

## Working on it

```sh
npm test                       # validator + smoke test; what CI runs
node scripts/rotation.js       # whose turn it is this week
node scripts/refresh.js boston --dry-run   # scan a city, change nothing
node scripts/validate.js       # data only
```

Node 22 or newer, and no dependencies — `package.json` has no `dependencies` block and there is nothing to install.

| Path | What it is |
| --- | --- |
| `index.html` | The whole page: styling, logic, copy in both languages |
| `assets/skylines.js` | The four landmark banners, as inline SVG |
| `data/<city>.js` | One self-contained file per city |
| `scripts/rotation.js` | Which city this week belongs to |
| `scripts/refresh.js` | The mechanical weekly scan |
| `scripts/validate.js` | Rejects malformed or half-translated data |
| `scripts/smoke.js` | Proves the weekly update actually works |
| `scripts/traffic.js` | Records readership into the README |
| `scripts/WEEKLY.md` | The brief the agent follows |
| `reports/<city>.md` | Last scan's findings — written by the job, read by the agent |
| `state/` | Page fingerprints and traffic history; machine-written |

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

- The mechanical half is [`.github/workflows/weekly.yml`](.github/workflows/weekly.yml). Run it by hand from the Actions tab — it takes an optional city, so you need not wait for a city's turn.
- The agent's schedule lives at https://claude.ai/code/routines, where it can be paused, rescheduled, or run immediately.
- The rules the agent follows are entirely in `scripts/WEEKLY.md`. Edit that file to make it more or less conservative; the next run reads the new version.
- To change the rotation order or cadence, edit `ORDER` in `scripts/rotation.js`. The smoke test asserts that every city still comes round within 28 days, so a mistake there fails the build.

## Licence

Code is MIT — see [LICENSE](LICENSE). The exhibition data is gathered from each museum's own public website; the listings are facts and are free to reuse, but each museum owns its own titles and images.
