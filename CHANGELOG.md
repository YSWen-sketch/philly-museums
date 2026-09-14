# Changelog

Written by the scheduled agent every Thursday. Manual edits should add a line here too.

## 2026-09-14 (one standard, all four cities)

Every city has now been swept against the inclusion standard without a cap. The list goes from 356 venues to **1,402**, and from 859 to 1,886 exhibitions and permanent displays.

| City | Venues | Exhibitions |
| --- | ---: | ---: |
| Philadelphia | 124 → 392 | 169 → 405 |
| New York | 96 → 504 | 330 → 819 |
| Washington | 71 → 222 | 225 → 334 |
| Boston | 65 → 284 | 135 → 328 |

The point of this was never the size. Philadelphia used to look like the biggest museum city of the four because it was the only one anybody had searched properly; the others had been given venue targets and stopped when they hit them. Sweeping all four the same way reverses the picture — New York, which looked smallest, has the most venues by a wide margin, and the ordering now reflects the cities rather than the effort spent on them.

Philadelphia was swept last and deliberately. Re-auditing its existing 124 against the standard is not the same question as asking what the list never had: the audit removed one venue (Museum of Illusions, a for-profit franchise attraction) and moved four to the closed list, and it was only when the other three cities had been swept uncapped that Philadelphia was clearly the under-covered one. Its own sweep added 273.

**84 candidates were examined and excluded**, each with a recorded reason: 46 with no public exhibition space (offices, archives, mail-only addresses), 20 closed for good, 5 with no access a member of the public can book, 4 that are outdoor sites with no indoor display, and the rest judged individually. Venues whose access could not be established at all — as opposed to venues that failed the bar — were recorded separately so a later pass retries them rather than treating the question as settled.

Two habits held throughout and are worth keeping. No date was ever inferred: where a museum printed a range without a year, the entry carries the wording as printed rather than an assumed 2026. And where a venue publishes no hours or no admission price, the entry says so instead of guessing — including for venues whose websites refuse automated reading altogether.

## 2026-09-14 (automation, landmarks, project hygiene)

The weekly update is now two halves, and the first half needs no model.

- `scripts/refresh.js` runs in GitHub Actions every Thursday at 07:00 New York time. It opens every venue page for that week's city, fingerprints the visible text to see what actually moved, drops exhibitions that closed more than a month ago, and writes `reports/<city>.md`. The scheduled agent runs two hours later and starts from that report rather than the open web, which is where nearly all of the cost was.
- That split is also the fallback. If the agent is paused, broken or out of quota, the Thursday job has still pruned the stale data, still refused to advance the "checked on" date it did not earn, and filed an issue carrying the report.
- One city a week, chosen by `scripts/rotation.js` rather than by judgement, so each city comes round every four weeks in the order Philadelphia, New York, Washington, Boston. The cycle is anchored to a fixed Thursday and cannot reset or skip at a year boundary.
- `scripts/smoke.js` proves it works, on every push and again before every scheduled run. It builds a throwaway copy of the project, serves fake museum pages from localhost, and drives the real refresh through a first scan, a page whose text changes, a page that goes down, a site that refuses robots, and a quiet week. It caught an emptied exhibition list being written as `shows: []},` rather than `shows: [] },`.

The first live run scanned Boston and found 15 of 65 venues behind bot walls. Retrying those with a browser user-agent recovered none of them — those walls fingerprint the TLS handshake, not the header — so the retry was reverted and the measurement recorded in the source. Reporting them is the right answer: the agent has the workarounds, and the report says where to spend them.

Each city also gets a landmark banner and an accent colour that re-tints the page, so you can tell where you are before reading: City Hall and the Art Museum, Liberty and the Brooklyn Bridge, the Capitol and the Monument, the golden State House dome and the Zakim. The drawings are inline SVG in `assets/skylines.js`, and the banner hides itself rather than breaking the page if that file fails to load.

Housekeeping: `LICENSE` (MIT), `package.json` with `npm test`, `.editorconfig`, a real `.gitignore`, and a daily job that records readership from GitHub's own traffic API into the README — no analytics script on the page and nothing about a visitor leaving GitHub.

## 2026-09-14 (inclusion standard)

Wrote down what counts as a venue, and put it in all three places that need to agree: the page itself, `README.md`, and the weekly reconciliation brief.

- The page carries it under the figures line, in a panel that opens on click, in whichever language the reader has chosen. It says what is included, what is not, and where the data comes from.
- The bar: a physical exhibition space a visitor can walk into, open on a published schedule or by an appointment anyone can book, within about 45 minutes of the city centre. Out: commercial galleries that sell the work on their walls, offices and archives, event and rental spaces, performance venues with lobby art, zoos and reserves with no rotating programme, for-profit themed attractions, and anything closed with no announced reopening.
- The weekly brief now uses the same bar to decide what to add and what to drop, and says that the three statements must be changed together.
- The page also loads only the city being read, rather than all four at once.

The standard exists because the first pass did not have one: Philadelphia was audited exhaustively while the other cities were given venue targets, which made Philadelphia look larger than New York. That was an artefact of how the lists were built, not a fact about the cities.

## 2026-09-14 (interface)

The site now has a name: **On View** in English, **东岸看展** in Chinese, with a standing subtitle naming the four cities. The city, not the site, moved into the browser tab title.

Interface reworked for the four-city scale:

- City tabs sit under the title and carry each city's venue count, so the size of a city is visible before switching to it.
- A figures line under the intro gives venues, exhibitions currently on view, free venues, and the date that city was last checked.
- Jump links to each group, with live counts that follow the search and filter.
- The result count now appears only once a filter or search has narrowed the list, since the figures line already carries the total.
- City intros no longer repeat the counts, and say something useful about the city instead.

## 2026-09-14 (later)

Expanded from one city to four. The page now carries a city switcher alongside the language toggle; both choices are remembered per browser and can be linked to with `?city=` and `?lang=`.

**New cities**, each built by scanning the channels where exhibitions get announced (Wikipedia museum lists, city tourism boards, local arts press, museum-association directories, university and library gallery programmes) and then reading every venue's own site:

- New York — 96 venues, 330 exhibitions across the five boroughs.
- Washington — 71 venues, 225 exhibitions, including the full Smithsonian roster and the venues outside the city that visitors still make the trip for.
- Boston — 65 venues, 135 exhibitions across Boston, Cambridge and the surrounding towns.

**Philadelphia** was audited against the same channels and grew from 42 venues to 124. The largest gaps were Calder Gardens, the American Philosophical Society Museum and Shofuso, along with the Fairmount Park mansions, the Germantown houses, the Main Line college galleries and the artist-run spaces in Kensington and South Philadelphia. The six permanent-collection venues that were previously a one-line list are now full entries with hours, admission and a link.

**Structure.** Data moved from a single `data.js` to one file per city in `data/`, each pushing onto a shared `CITIES` array. The validator now checks every city file, rejects duplicate venue names within a city, and still fails a field that exists in only one language.

## 2026-09-14

- Initial release. Data for 42 venues plus 10 permanent-collection and closed venues, compiled by hand from official museum websites.
- The page now reads in English or Chinese, switchable in the top right and remembered per browser.
- Added a link to each museum's official exhibitions page; museum names on the page are clickable.
- Added `scripts/validate.js`, which runs on every push and fails the build on a malformed or half-translated field.
- Enabled the weekly automatic reconciliation.
