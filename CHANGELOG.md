# Changelog

Written by the scheduled agent every Thursday. Manual edits should add a line here too.

## 2026-10-22 (Washington)

`scripts/rotation.js` named Washington as this week's city, and `data/washington.js` had the oldest `updated` date (September 24) of the four files, confirming it. `reports/washington.md` existed (scanned 2026-09-24, 222 venues, 333 exhibitions after pruning): 38 venues unreachable, 31 with a redirected `u` link, 24 exhibitions closing within 30 days, 118 venues with no exhibition on file, 23 exhibitions with no closing date, and 0 pages flagged as changed.

As in every recent week, this session's network egress proxy blocked all direct outbound HTTPS — not just to museum domains, but to the `r.jina.ai` workaround and to unrelated control domains (`example.com`, `google.com`), confirming a blanket environment policy rather than per-site blocking. `WebFetch` and `curl --http1.1` both failed with DNS/connection errors on every URL tried. All verification this week came from `WebSearch` alone.

**Redirects (31) applied directly from the report**, with no fetch needed: the mechanical scan had already followed each one and recorded the current target, so `u` was updated to the new URL for all 31 flagged venues, including both National Air and Space Museum pages (the main building and the Udvar-Hazy Center share one listings URL), National Museum of Women in the Arts, The Kreeger Museum, National Archives Museum, United States Holocaust Memorial Museum, National Building Museum, Washington National Cathedral, Tudor Place, and 23 others — see the data diff for the full list.

**Exhibitions added (4, all with museum-stated dates/wording confirmed via WebSearch):**
- National Museum of the United States Navy: "Nation and Navy: The American Revolution" (opened 2026-07-29, no closing date announced) — the file had `shows: []` for this venue.
- National Deaf Life Museum (Gallaudet): "We, Native Deaf People, Are Still Here!" (October 2024 – December 2026) — the file had `shows: []` for this venue.
- Museum of the Bible: "Revealing the Hidden: Byzantine Icons from Thessaloniki and Patmos" (2026-11-05 to 2027-02-28), the museum's own announced successor to the closed "From the Vault."

**Exhibitions dropped as closed (1, more than 30 days past its own stated end date):** National Gallery of Art's "Dear America: Artists Explore the American Experience" closed September 20 — 32 days before today.

**Corrections found along the way:** NRA National Firearms Museum's `u` pointed to a dead `.aspx` path (404, mechanically flagged) — the museum is still open and operating (no closure or move found), so the link was updated to its current page rather than leaving the museum unreachable.

**Spot-checked against the 13 Smithsonian venues under "unreachable" (Hirshhorn, National Portrait Gallery, National Museum of African Art, National Museum of Asian Art, National Museum of Natural History, National Museum of American History, National Museum of African American History and Culture, National Museum of the American Indian, National Postal Museum, Anacostia Community Museum, Arts and Industries Building, Molina Family Latino Gallery, Smithsonian Institution Building): all already matched current WebSearch results exactly — the Hirshhorn's October 31 Sculpture Garden reopening and Yoshitomo Nara opening show, the Natural History Museum's "From These Lands" long-run show, the American History Museum's "In Pursuit of Life, Liberty & Happiness," Anacostia's "We Make History," and the Molina Gallery's "¡Puro Ritmo!" were all already on file with matching dates. No changes needed; this is good evidence the Smithsonian entries were reconciled properly in an earlier cycle. Also spot-checked and confirmed accurate with no change needed: Rubell Museum DC, The John F. Kennedy Center for the Performing Arts, American University Museum at the Katzen Arts Center, Salve Regina Gallery (CUA), IDB ArtLAC Gallery, Linda K. Jordan Gallery (Gallaudet), Middle East Institute Arts and Culture Center, House of the Temple, Latvian Museum, DAR Museum.

**Checked and left as-is pending a successor (no invented date, none found via WebSearch):** Pyramid Atlantic Art Center's "Ruminations" (closed Oct 4), Reston Museum's "The Golden Standard" (closed Oct 12), Art Museum of the Americas' "Passport to Patriotism" (closed Oct 18), DC History Center's "hometown DC" (closed Oct 5, its "Class Action" show already on file), Glen Echo Park's three closed shows, Arts Club of Washington's two closed shows, IA&A at Hillyer, Glenview Mansion, and District of Columbia Arts Center. None of these is yet 30 days past closing, and the mechanical scan prunes on that schedule rather than this pass doing it by hand.

**Could not verify this week:** Georgetown University Art Galleries (its on-file "Rafael Lozano-Hemmer: Look Alive" dates could not be confirmed or contradicted), Museum of Contemporary Art Arlington (its on-file "Assembly 2026" biennial could not be confirmed — WebSearch found only the 2022 edition — but was left as-is since nothing contradicts it and the museum's own flag already explains the gallery turnover), STABLE (website still appears to be down), SPAIN arts & culture (WebSearch surfaces citywide Embassy-of-Spain programming without making clear which shows are physically at the 16th Street venue versus hosted elsewhere, e.g. at the Kreeger Museum — left unchanged rather than guess the venue). Beyond these, the report's full no-exhibition-on-file (118) and no-closing-date (23) tiers were not worked through venue by venue this week; budget went to the unreachable, redirected and closing-soon priority groups per the brief's ordering. That is a known limitation, not a guess.

**Follow-up check on the remaining closing-soon exhibitions:** Arts Club of Washington's "October 2026 Exhibit" had artists "not yet named online" — WebSearch found the venue's own gallery notes naming Sheila Flanders and Samantha Lee Shelton (Spilsbury Gallery) and Cheryl Bearss and Anna Katalkina (Monroe galleries downstairs), so the description was updated accordingly. National Museum of Asian Art's "Into the Waters," National Museum of Women in the Arts' "Burnished," Dupont Underground's two closed shows, and United States Botanic Garden's "America's State Flowers" were also checked: no extension or successor found for any, but — like Pyramid Atlantic, Reston Museum, and the others above — none is yet 30 days past its own stated closing date (the earliest, September 24, reaches 30 days on October 24), so they stay on file for the mechanical scan to prune on schedule rather than being pulled by hand early. Martin Luther King Jr. Memorial Library's "Diasporacity" and "Concopia" and Dumbarton Oaks' "Hestia Fragmented" and National Portrait Gallery's "Best Laid Plans" returned conflicting or no evidence either way and were left untouched rather than guessed at.

Washington's `updated` date is bumped to October 22, 2026; the other three cities' dates are untouched. `npm test` (validator + smoke test) passes.

## 2026-10-15 (New York)

`scripts/rotation.js` named New York as this week's city, and `data/newyork.js` had the oldest `updated` date (September 17) of the four files, confirming it. `reports/newyork.md` existed but was itself from that same September 17 scan — the mechanical refresh has not re-run for New York since (its workflow runs have fired in the afternoon UTC each Thursday rather than the documented 11:00, and simply hadn't reached New York again by the time this session started), so the report's "closing within 30 days" window (Sept 17–Oct 17) was four weeks stale rather than fresh.

As in recent weeks, this session's network egress proxy blocked all direct outbound HTTPS — not just to museum domains, but to unrelated control domains (`example.com`, `google.com`) and to the `r.jina.ai` workaround, confirming a blanket environment network policy rather than per-site blocking. `WebFetch` failed on every URL with a DNS error for the same reason. The three-fetches-then-search procedure in the brief was therefore unusable as written; all verification this week came from `WebSearch` alone, which runs through separate infrastructure and did resolve.

**Redirects (59) applied directly from the report**, with no fetch needed: the mechanical scan had already followed each one and recorded the current target, so `u` was updated to the new URL for all 59 flagged venues (MoMA PS1, Studio Museum, The Drawing Center, Hispanic Society, Noguchi Museum, and 54 others — see the data diff).

**Exhibitions added (5, all with museum-stated dates confirmed via WebSearch):**
- Museum of Jewish Heritage: "Will These Words Reach You? The Underground Archive of the Warsaw Ghetto" (Sept 18 – Feb 14, 2027) and "A Statue for Liberty: Inventing an Icon" (Oct 25, 2026 – Mar 19, 2027), both dated from the museum's own announcements.
- Museum of the Moving Image: "Seeing the Cinema: Photographic Visions of Movie Theaters" (Oct 10, 2026 – Mar 21, 2027), dated from the museum's fall press release.
- National Museum of the American Indian – New York: "Ancestral Connections" and "Jeffrey Veregge: Of Gods and Heroes", both long-running/ongoing per the Smithsonian's own exhibitions listing; the file previously showed only two of this venue's four current shows.

**Spot-checked, found already accurate, no change needed:** The Metropolitan Museum of Art, The Museum of Modern Art, Brooklyn Museum (three new fall shows already on file), Whitney Museum, Guggenheim, El Museo del Barrio, Asia Society Museum, Park Avenue Armory, New York Historical. These sampled correctly against current WebSearch results, which is some evidence the file was already in good shape going into this week.

**Checked and left as-is pending a successor (no invented date):** Cooper Hewitt's "Made in America" (Christopher Payne) has closed (Sept 27 or Oct 4, sources disagree) with no announced successor found; Cathedral of St. John the Divine's "Gaia" closed Oct 9 with no extension or successor found. Both stay on file — neither is yet 30 days past closing, and the mechanical scan prunes on that schedule rather than this pass doing it by hand.

**Could not verify this week:** Society of Illustrators, Judd Foundation, Lower East Side Tenement Museum, Museum of Arts and Design, The Morgan Library & Museum, International Center of Photography — WebSearch returned only stale, conflicting, or undated secondary sources for these, so nothing was changed. Beyond these, the report's full unreachable (72), closing-within-30-days (98), no-exhibition-on-file (180) and no-closing-date (120) tiers were not worked through venue by venue; at New York's scale (504 venues) that is several weeks of budget on its own, and this pass prioritized the redirects (cheap and fully confirmed) and a sample of the venues most visitors would notice. The rest are left exactly as on file — a known limitation, not a guess.

The page copy's `note`/`notez` was rewritten out of the stale "September is changeover season" framing (that changeover has already happened) to reflect what is still true going into November: Neue Galerie's construction closure and the Whitney Biennial's partial closure. New York's `updated` date is bumped to October 15, 2026; the other three cities' dates are untouched. `npm test` (validator + smoke test) passes.

## 2026-10-08 (Philadelphia)

`scripts/rotation.js` named Philadelphia as this week's city, and `data/philadelphia.js` had the oldest `updated` date (September 14) of the four files, confirming it. However `reports/philadelphia.md` did not exist — the mechanical scan has only ever run for Boston, New York and Washington (`state/scan.json` has no `philadelphia` key), so this week's 11:00 UTC refresh either hasn't fired yet or hasn't been pointed at Philadelphia. Triggering it manually was not possible (`workflow_dispatch` returned 403, insufficient permission), so this pass worked directly from the data file: every exhibition already past its own listed closing date, or closing within 30 days of today, was pulled out as the priority list — 63 of the city's 392 venues, standing in for the report's "changed/unreachable" and "closing within 30 days" categories.

As in recent weeks, this session's network egress proxy blocked all direct outbound HTTPS to every museum domain, the museums' own homepages, and the `r.jina.ai` text-extraction workaround (confirmed against unrelated control domains too — a blanket environment policy, not a per-site block). All 63 venues were therefore checked via WebSearch only, split across 8 parallel passes. 51 of 63 were verified this way (search surfaced attributable, dated content from the venue's own site or reliable secondary coverage); 12 could not be verified and were left exactly as on file, per the brief.

**Academy of Natural Sciences has closed its public galleries for good**, effective September 30, 2026, confirmed by multiple news outlets (WHYY, Axios, Fox29, Billy Penn). The venue — already flagged in the file and pre-listed under `closed` in anticipation — has been removed from the active Science & Medicine group (which keeps Mütter Museum, Science History Institute, The Franklin Institute and the rest); the group's and the city's `note`/`notez` were rewritten out of the future tense. Separately, ICA's "closed for reinstallation until Sep 25" flag was also stale — its own on-file shows already run from September 26 — so that flag and hours line were cleaned up to reflect that it has reopened.

**Exhibitions added (8, all with museum-stated dates/wording):** The Plastic Club ("American Color Print Society 86th Annual Fall Exhibition"), Rosemont College's Nugent Gallery ("Alumni Exhibit", "Larry Spaid Exhibit"), Perkins Center–Collingswood ("Tom Gaines", "Written By Us"), Trenton City Museum at Ellarslie ("2026 Trenton's Christmas Past: The Slinky", "Celebrating America 250: Revolutionary Memorabilia"), Historic Strawberry Mansion ("From Invisible to Invincible: Honoring the Art of Color"), Second State Press ("Chance Encounter"), Wharton Esherick Museum ("All the Time in the World"), Rare Book Dept./Free Library ("Well Read, Well Loved, Well Used", replacing the sText placeholder with real dates: 2026-10-01 to 2027-04-17).

**Exhibitions dropped as closed (43, all past their own stated end date with no extension found):** across Art in City Hall (5 of 6 shows), Academy of Natural Sciences, Fleisher Art Memorial, The Clay Studio's date correction, MC3's three galleries, DCCC, Chester County Art Association, Wayne Art Center, ArtFusion 19464, Science History Institute, Scott Arboretum, Jenkins Arboretum (2 shows), Longwood Gardens' "Festival of Fountains", Morris Arboretum's three summer displays, and others — see the data diff for the full per-venue list.

**Corrections found along the way:** Leonard Pearlstein Gallery (Drexel) actually posts hours — Tue–Fri 12–5, Sat 12–6 — contradicting the file's "no hours posted" note; Swarthmore's List Gallery show closes Dec 13, not Dec 23; Free Library Parkway Central's "Dollars to Donuts: Katie Strachan" had already closed Aug 29, not Oct 13; The Clay Studio's "Small Favors 2026" closes Dec 31, not Jan 3; Winterthur's "At Home At Winterthur" has a real opening date (May 23, tied to the museum's 75th anniversary) rather than being undated.

**Could not verify (left exactly as on file):** Da Vinci Art Alliance, Twelve Gates Arts, Allens Lane Art Center, Community Arts Center, AUTOMAT Collective, Space 1026, Grizzly Grizzly, AOY Art Center, Historical Society of Pennsylvania (search also surfaced a conflicting, already-closed run of a same-titled show — flagged, not acted on), The Athenæum of Philadelphia, Congregation Mikveh Israel, Schwenkfelder Library & Heritage Center. All of these had their own domain blocked for direct fetch and either returned no usable WebSearch results or only ambiguous/undated ones. Congregation Mikveh Israel's and Space 1026's listed shows already read as closed by date (Sept 4 and Aug 30) but were left on file rather than pruned, since the venue itself is unverified this week.

**Not reached this week:** the remaining 329 Philadelphia venues outside the 63-venue priority list, including all 216 venues on file with `shows: []` ("no exhibition on file") — budget went entirely to the changed/closing-soon priority group, per the brief's ordering. `plain` and `closed` were not independently re-checked this week beyond the Academy of Natural Sciences update above.

Philadelphia's `updated` date is bumped to October 8, 2026; the other three cities' dates are untouched. `npm test` (validator + smoke test) passes.

## 2026-10-01 (Boston)

`scripts/rotation.js` named Boston as this week's city, and `reports/boston.md` existed (scanned 2026-09-14, 65 venues, 135 exhibitions after pruning). Work followed the report's priority order: the 4 pages flagged as changed, the 9 exhibitions closing within 30 days, the 14 venues with a redirected `u` link, and the 14 venues the mechanical scan could not reach.

As in the past two weeks, this session's network egress proxy blocked all direct outbound HTTPS to every museum domain and to the `r.jina.ai` workaround (confirmed against neutral control domains too, so it is a blanket environment policy, not a per-site block). All findings below come from WebSearch instead, which runs through separate infrastructure. Where a search result only paraphrased a page rather than quoting it, or where sources disagreed, the item was left unverified rather than acted on — no date was invented or inferred.

**Redirected links fixed** (confirmed by the mechanical scan's own real HTTP fetch, which is unaffected by this session's egress block, so these are high-confidence): Harvard Art Museums, Boston University Art Galleries ("/art/exhibitions/" page is gone), Museum of the National Center of Afro-American Artists, Boston Children's Museum, Blue Hills Trailside Museum, Boston Athenaeum, Museum of African American History, USS Constitution Museum, Old State House, Old South Meeting House, Edward M. Kennedy Institute, Armenian Museum of America, The Loring Greenough House, Gore Place.

**Added (new exhibitions found via WebSearch, with explicit museum-stated dates):**
- Rose Art Museum: "Yinka Shonibare: Sanctuary" (2026-02-11 to 2027-01-03), the artist's US debut of *Sanctuary City*.
- Harvard Museum of Natural History: "Au: Origins Unearthed," opening 2026-11-12, no closing date published yet.
- Harvard Collection of Historical Scientific Instruments: "Measurement on the Color Line: Scientific Instruments and the Making of Human Categories" (2026-10-16 to 2027-08-15).
- John F. Kennedy Presidential Library and Museum: "Declaring the Revolution: America's Printed Path to Independence" (2026-06-22 to 2026-11-29) — the file had `shows: []` for this venue.
- Peabody Museum of Archaeology & Ethnology: "Washington's Sash" (2026-05-25 to 2026-10-18) and "Castaway: The Afterlife of Plastic" (opens 2026-05-17, no closing date published).
- Boston Athenaeum: added the start date 2026-02-12 to "Imagined Nation" (closing date was already on file).

**Removed:** MassArt Art Museum's "closed for installation, reopens September 30" museum-level flag — the reopening date it names has passed, so the flag is now stale; the city footer note was updated to match (it now says MassArt and Harvard's Putnam Gallery have reopened).

**Confirmed unchanged / already correct:** Gallery 263 ("Myth to Ritual," closing 2026-10-03, and hours), Arnold Arboretum ("Living Connections: The Arnold Arboretum and Korea"), Harvard Museum of the Ancient Near East ("Egypt Eternal"), Institute of Contemporary Art Boston ("Lucy Raven: Rounds" and the "90 YEARS" successor show already on file), Carpenter Center ("Knowledge Is Myth" and "Constitutive Outside" successor shows already on file), deCordova Sculpture Park (closing dates for "Nature Sanctuary" and "Zohra Opoku, Self-Portraits"), Nichols House Museum hours, Eustis Estate ("Myth and Memory: Stories of the American Revolution"), Gropius House (no rotating exhibition, correctly `shows: []`), Blue Hills Trailside Museum and Loring Greenough House hours/admission.

**Closed on schedule with no successor found (left on file; not yet 30 days past closing, so not pruned):** Peabody Essex Museum's "Knowing Nature: Stories of the Boreal Forest" (closed 2026-09-27), Boston Public Library's "Out of the Box: Unpacking the World of Archives" (closed 2026-09-30).

**Could not verify, or evidence conflicted (left as-is, flagged for next pass):**
- Frederick Law Olmsted National Historic Site: two WebSearch queries suggested the visitor-center hours may have narrowed from Thu–Sun to Fri–Sat only, but this touches several linked tour-time details I could not independently confirm — needs a direct page check before editing.
- Gore Place: tour-time list may be missing a 10am slot; search snippets disagreed with each other.
- Armenian Museum of America: "Arshile Gorky: Redrawing Community and Connections" may have closed 2026-09-27 rather than the file's 2026-09-29 — sources disagreed (one said "extended to September 27," another just "through September"); both dates are already past today, and no successor show for that gallery was found.
- Institute of Contemporary Art Boston: "Collection Spotlight: Nari Ward" may have closed 2026-09-13 rather than the file's 2026-09-20 — one search result gave the earlier date; also already past today either way.
- Otis House (Historic New England): a secondary news source (not historicnewengland.org, which was unreachable) claims the house closed 2026-08-30 for a multi-year restoration with no announced reopening date. Not confirmed directly — left unchanged, but this needs checking soon since it would affect whether the venue still belongs on the list.
- USS Constitution Museum: "Exploring Old Ironsides… by Photographer Greg M. Cooper" may have already closed (one source said through 2026-07-18); a "Small Ships" exhibit was also mentioned with no dates found. Left unchanged.
- Boston Children's Museum: possible new exhibits ("Trees Make Happiness 2" in the Japanese House Gallery, "Dream it! Build it!") surfaced with no reliably sourced dates — not added.
- MIT Museum, Museum of Science, The Sports Museum: search results looked stale or too vague to act on; left unchanged.

**Not reached this week:** the 22 venues the report listed as "no exhibition on file" and the 21 "no closing date on file," plus the remainder of Boston's ~65-venue report beyond the two priority groups above — budget went to priorities 1 and 2 as the brief directs. Also not independently re-verified this week: Rose Art Museum's existing shows beyond the new addition, Peabody's existing long-term galleries, Museum of African American History's two current shows (a search summary suggested "Black Voices of the Revolution" runs "through 2026" but gave no exact date, so nothing was added), and Harvard Museum of the Ancient Near East's secondary shows.

Boston's `updated` date is bumped to October 1, 2026; the other three cities' dates are untouched.

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
