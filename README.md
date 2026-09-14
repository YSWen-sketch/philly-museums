# On View · 东岸看展

A visitor's list of what is on show right now in **Philadelphia, New York, Washington and Boston**: 356 museums, art galleries, historic houses and university galleries, with the 859 special exhibitions they are currently advertising, plus opening and closing dates, hours and admission prices.

The site is called **On View** in English and **东岸看展** in Chinese.

**Live site: https://yswen-sketch.github.io/philly-museums/**

The page reads in **English or Chinese**, switchable in the top right corner, and shows **one city at a time**, chosen from the tabs under the title, each showing how many venues it holds. Both choices are remembered in the browser, and `?lang=en&city=boston` links straight to a particular view. A first-time visitor gets Chinese if their browser asks for Chinese, English otherwise. Exhibition titles stay in their official form in both languages so they can be searched for.

## How it works

- **Static page, no build step.** `index.html` holds the styling and logic, including the masthead, the city tabs, the per-city figures, the closing-soon and opening-soon panels, the search and filter bar, and the jump links to each group. Each city is one self-contained file in [`data/`](data/) that pushes an object onto `CITIES`; the page loads them all and lets the reader switch. Closing countdowns and the "opening soon" tags are computed from the visitor's own clock when the page loads, so they never go stale on their own.
- **Automatic refresh every Thursday morning.** A scheduled Claude cloud agent follows [`scripts/WEEKLY.md`](scripts/WEEKLY.md): it opens each museum's official exhibitions page, reconciles the city files against it, runs the validator, appends to [`CHANGELOG.md`](CHANGELOG.md), and pushes to `main`. GitHub Pages republishes within a minute.
- **Every push is validated.** `node scripts/validate.js` runs in GitHub Actions and fails the build on a malformed date, a missing field, or a field that exists in only one language, so a single typo cannot blank out the page.

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

The standard exists because the first pass did not have one. Philadelphia was audited exhaustively while the other three cities were given venue targets, which left Philadelphia looking larger than New York — an artefact of how the lists were built rather than a fact about the cities. Applying one bar to all four fixes that.

## What is covered

| City | Venues | Exhibitions |
| --- | ---: | ---: |
| Philadelphia | 124 | 169 |
| New York | 96 | 330 |
| Washington | 71 | 225 |
| Boston | 65 | 135 |

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
