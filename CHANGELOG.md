# Changelog

Written by the scheduled agent every Thursday. Manual edits should add a line here too.

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
