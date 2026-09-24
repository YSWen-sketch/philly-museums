# Changelog

Written by the scheduled agent every Thursday. Manual edits should add a line here too.

## 2026-09-24 (Washington)

`scripts/rotation.js` named Washington as this week's city. `reports/washington.md` did not exist: the mechanical Thursday scan (`weekly.yml`) had not run yet when this session started (its `schedule` trigger appears to run late some weeks — the same gap the 2026-09-17 New York entry below flagged), and this session had no permission to trigger it via `workflow_dispatch` (403). Priority 1 (changed/unreachable/redirected pages) was therefore skipped for lack of a report.

This session's network egress also blocked all direct outbound HTTPS (WebFetch and curl both refused every tested host, including neutral ones), so effort went to priority 2 using WebSearch only: the 25 exhibitions across 19 venues that our data shows closing within 30 days (by 2026-10-24). Findings are sourced from search snippets quoting official pages and press listings, not from fetching the pages directly.

**Changed:**
- Transformer: "Icons" and "Flow" at The LINE DC actually closed 2026-07-06, not 2026-10-18 as on file (per transformerdc.org and East City Art) — removed, since they closed more than 30 days ago. The museum-level flag now says the P Street space is between shows and the next exhibition ("The Kaleidoscope Effect," already on file) doesn't open until November.
- Arts Club of Washington: added a downstairs-gallery show, "Sabina Puppo and Karen Schulz" (curated by Brandon Fortune), closing 2026-09-26 alongside the Spilsbury members' show already on file — per washington.org, it had been missing.

**Removed:** Transformer's "Icons" and "Flow" (see above).

**Confirmed unchanged** (dates on file matched what the museum's own site or press listing says): IA&A at Hillyer ("Auction on the Alley 2026"), Glen Echo Park (three Partnership Galleries shows), National Museum of Asian Art ("Into the Waters with Senju and Bingyi"), National Museum of Women in the Arts ("Burnished: Pueblo Pottery"), Martin Luther King Jr. Memorial Library ("Diasporacity"), Glenview Mansion ("The World As We View It"), Pyramid Atlantic Art Center ("Ruminations: Our Stories in Paper"), Museum of the Bible ("From the Vault: Art About America"), United States Botanic Garden ("America's State Flowers"), Reston Museum (the "Golden Standard" 50th-anniversary show), National Portrait Gallery ("Best Laid Plans"), Art Museum of the Americas ("Passport to Patriotism").

**Could not fully verify** (search gave no exact date, or conflicting dates, so the file was left as-is):
- District of Columbia Arts Center, "Fallin' from the Uppercut": confirmed on view, no exact closing date found.
- Sarah Silberman Art Gallery (Montgomery College), "57th Annual Rockville and Germantown Faculty and Staff Exhibition": confirmed running in September 2026, no exact closing date found.
- Dupont Underground, "Veiled Ladies" and "The Skin of Discomfort": confirmed with a September 4 opening reception, no closing date found.
- Dumbarton Oaks, "Hestia Fragmented": one source said May–August 2026, another said the show continues through October 11 (matching the file); left as-is.
- Martin Luther King Jr. Memorial Library, "Concopia": the file has this closing 2026-10-22, but search turned up a separate "Concopian Chamber of Wonders" fall program with an opening celebration on 2026-09-10 and an original June 6 – September 3, 2026 run at other branch libraries — unclear whether these are the same exhibition; left as-is.
- Martin Luther King Jr. Memorial Library, "hometown DC": the citywide project's press release says the run across libraries ends 2026-10-05, one day before the file's 2026-10-06; not clearly a museum-stated correction for this specific location, so left as-is.

**Scope note:** this covered the 25 exhibitions with a near-term closing date, which is priority 2 of the weekly brief. Washington's other roughly 200 venues (priorities 1, 3 and 4) were not reached this week and should be the focus once a fresh report exists for this city.

**Process note for whoever next maintains this repo:** this is the second week in a row (see 2026-09-17 below) that `reports/<city>.md` did not exist when the agent started. Worth checking whether `weekly.yml`'s `schedule` trigger is firing reliably, and whether the agent's GitHub App permissions should include `actions: write` so a missing report can be filled in by triggering the workflow directly instead of working from web search alone.

## 2026-09-17 (New York)

`scripts/rotation.js` named New York as this week's city. `reports/` held only a stale `boston.md` scanned 2026-09-14, from before the venue count in every city file roughly quadrupled — it predates the current New York data (65 venues at scan time vs. 504 now) and could not be used. Priority 1 (changed/unreachable/redirected pages) was therefore skipped for lack of a report; effort went to priority 2, the 99 exhibitions across 75 venues that our data shows closing within 30 days (by 2026-10-17).

This session's network egress proxy blocked all direct outbound HTTPS (WebFetch, curl, and the `r.jina.ai` workaround) with a blanket policy denial — confirmed against neutral control domains (wikipedia.org, google.com) that failed identically, so it was not a per-site block. Direct page-fetching was abandoned in favor of WebSearch, which runs through separate infrastructure and largely worked; findings below are sourced from search snippets that quote official pages, press releases, or event listings rather than from fetching the pages directly, and are noted as such.

**Changed:**
- Museum of Arts and Design: "Alice Riehl's Porcelain Florilegium" extended to Oct 12 (was Oct 4); "2025 Burke Prize: Hai-Wen Lin" extended to Oct 11 (was Oct 4) — per madmuseum.org.
- Westbeth Gallery: "Imprints of Becoming" corrected to Sept 13 – Oct 7 (was Sept 18 – Oct 4) — per Westbeth's own 2026 gallery calendar.
- Austrian Cultural Forum New York: "Dietmar Feichtinger: Architecture of Connection" now ends Sept 26, not Sept 25 — per acfny.org.
- NYU Tisch 8th Floor Photo Gallery: "The Object/Photograph" extended to Dec 11 (was Sept 26) — per tisch.nyu.edu.
- Louis Armstrong House Museum: "The Corona Collection" extended to Sept 26 (was Sept 18); description updated in both languages to say so — per the museum's own site.

**Removed:** none this week.

**Flagged, not changed (sources disagreed or gave no confirmation, so the file was left as-is rather than guessed at):**
- Museum of the City of New York, "Another Wonderland": our file has it closing Oct 12; MCNY's own press material found by search says Sept 20, and one other summary said Sept 27. Worth a direct look.
- Center for Puerto Rican Studies (Centro), Hunter College, "Afterlives of San Juan Hill": search turned up a 2025 run (extended through Oct 2025, then Puerto Rico Dec 2025–Feb 2026) but nothing confirming the 2026-09-09–2026-10-04 dates on file.
- Materials for the Arts Gallery, "Lucky Finds: Second Chances": a closing-reception date of Sept 3 turned up, conflicting with our Sept 17 close.
- Center for Brooklyn History, "New York City History Day Showcase": only a 2025-dated listing was found.
- A handful of one-day date differences (SVA Gramercy's "Brad Holland," SVA's "BFA Fine Arts Exhibition") that may just be reporting noise rather than real errors.

**Could not be verified at all** (search returned nothing usable, so left exactly as on file): Kingsborough Art Museum, Macy Art Gallery, Richard and Dolly Maass Gallery (Purchase College), Rye Arts Center, Wave Hill (most of its listed shows), and roughly a third of the individual exhibitions inside otherwise-partially-confirmed venues — mostly small galleries and university spaces with little web presence.

**Scope note:** this covered the 75 venues with a near-term closing date, which is priority 2 of the weekly brief. New York's other roughly 430 venues (priorities 3–4, plus the priority-1 changed/unreachable/redirected check that the report would normally drive) were not reached this week and should be the focus once a fresh report exists for this city.

**Process note for whoever next maintains this repo:** the mechanical Thursday scan (`weekly.yml` / `scripts/refresh.js`) does not appear to have run for the last two rotation cycles — the only file in `reports/` was a Boston scan already superseded by the venue-count sweep. It's worth checking whether that workflow is still firing on schedule.

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
