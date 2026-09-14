# Weekly reconciliation procedure

This is the working brief for the scheduled agent. A person can follow it by hand just as well.

**Goal:** keep the city files in `data/` matching what each museum's own website says, so that an ordinary visitor planning a weekend can trust it. When in doubt, leave a field alone. An omission is a small problem; an invented date sends someone across the city for nothing.

## 0. Orient

- Work from the repository root. Run `date` to establish today, then read `README.md` and one file in `data/` so the field meanings are fresh.
- Only these files may be modified: the city files in `data/` and `CHANGELOG.md`. Leave `index.html`, `scripts/` and `.github/` untouched.
- **There is one file per city in `data/`** — Philadelphia (124 venues), New York (96), Washington (71) and Boston (65). Each is self-contained and pushes one object onto `CITIES`. Reconcile them one at a time and finish a city before starting the next, so that a run which stops early still leaves whole cities correct.
- **356 venues is more than one run can reconcile well.** Rotate: take one city each week, in the order Philadelphia, New York, Washington, Boston, picking whichever city's `updated` date is oldest. Reconciling one city properly beats skimming four.
- **Everything visitor-facing is bilingual.** The plain key is English, the same key with a `z` suffix is Chinese: `n`/`nz`, `h`/`hz`, `p`/`pz`, `flag`/`flagz`, `d`/`dz`, `sText`/`sTextz`, `eText`/`eTextz`. Whenever you add or change one side, change the other in the same edit. The validator rejects a field that exists in only one language.
- Exhibition titles (`t`) and street addresses (`a`) are not translated; they stay as the museum publishes them.

## 1. Reconcile each museum, city by city

For the city you are reconciling this week, for each museum in its `groups`:

1. Fetch its `u`, the official exhibitions page. If the page comes back empty, is rendered by JavaScript, or the host refuses the request, try the museum's homepage once, then search the web for `"<museum name>" exhibitions 2026`. **Cap it at three fetches per museum.** Past that, leave the museum's data exactly as it is and record it as unverified in the changelog.

   Many museum sites block automated requests outright or load their listings with JavaScript. Expect a handful of venues per city to go unverified most weeks. That is a known limitation, not a failure, and it is never a reason to guess.

   Two workarounds are known to help, and are worth trying before giving up: the `https://r.jina.ai/<url>` text-extraction proxy gets past the Akamai blocks on the Harvard museum sites and several others, and `curl --http1.1` with a browser user-agent works where plain fetches get a 403. For the Smithsonian, whose museum subdomains are all blocked, `my.si.edu/exhibitions?page=N` and `my.si.edu/locations/<slug>` serve the Smithsonian's own titles, ISO dates, hours and addresses in the clear.

2. Reconcile against what the website actually says:
   - `shows` — add newly announced exhibitions, remove ones the museum has taken down or that closed more than 30 days ago.
   - Per exhibition: `t` keeps the official title. `s` and `e` take a `YYYY-MM-DD` date **only when the museum states one**; otherwise use `sText`/`sTextz` or `eText`/`eTextz` with the wording as given, such as `eText: "Through November"` with `eTextz: "至 11 月"`. Never infer, round, or invent a date. `d`/`dz` is a one-line description telling a visitor what kind of show it is: roughly 10 to 20 words in English, 10 to 30 characters in Chinese.
   - Update `h`/`hz` (hours), `p`/`pz` (admission) and `flag`/`flagz` (a museum-level notice such as a closure for reinstallation) when they change, matching the formatting of the surrounding entries. English hours use 12-hour times as the museum writes them; Chinese hours use the 24-hour convention already in the file.
   - If `u` is dead and a current official exhibitions page exists, update `u`.
3. Do not rename museums, do not add or restructure groups, and do not drop a museum that simply has nothing on right now — give it `shows: []`. A museum that has closed permanently moves out of `DATA` into `CLOSED`.

## 2. `plain` and `closed`

One fetch each at most. Correct hours, admission or seasonal programming if they have changed. Both lists are bilingual in the same way.

## 3. Page copy, per city

- `lede`/`ledez` (intro) and `note`/`notez` (footer) change only when something real has changed, such as a major museum closing or a season's worth of shows turning over. Keep each to two sentences and keep the existing tone. The intro line names a venue count; correct it if you added or removed venues.
- Set the reconciled city's `updated` to today as `"September 14, 2026"` and `updatedz` as `"2026 年 9 月 14 日"`. The other cities keep their old dates — never bump a date you did not earn, since the date on the page is what tells a reader how much to trust it.

## 4. Validate

Run `node scripts/validate.js`. It must print ✓. Fix whatever it reports and run it again until it passes. Do not commit a file that fails.

## 5. Record what changed

Add a section to the top of `CHANGELOG.md` headed with today's date and the city you reconciled, written in English, one line per change naming the museum and what moved. Write "No changes." when nothing did. List any museums that could not be verified this week, with the reason.

### Adding and removing venues

The same standard governs every city. It is stated in `README.md` and shown on the page itself, so the three must stay in agreement — if you change the bar here, change it there too.

**A venue belongs on the list when all of these hold:**

- It has a physical exhibition space a visitor can walk into. A museum, gallery, historic house, or a university or library gallery.
- It is open on a published schedule, or by an appointment any member of the public can book.
- It is within about 45 minutes of the city centre. Anything outside the city proper carries its travel time in `flag`/`flagz`.

**A venue does not belong when any of these hold:**

- It sells the work on its walls. A nonprofit that runs a juried exhibition programme is fine even if work is for sale; a commercial gallery is not.
- It is really an office, an archive, an events or rental space, or a shop.
- It is a performance venue whose only art hangs in the lobby.
- It is a zoo, an aquarium or a nature reserve with no rotating exhibition programme.
- It is a for-profit themed attraction: a wax museum, an immersive light show, a haunted-house experience.
- It has closed, or is shut with no announced reopening. A closure with a published reopening date stays, with the date in `flag`/`flagz`.

When you come across a venue that meets the bar and the file does not have it, add it to the right group with every bilingual field filled in. When a venue on the list no longer meets the bar, move it to `closed` if it has shut for good, and otherwise delete it and say why in the changelog. When you are genuinely unsure, keep it and explain the doubt in the changelog rather than dropping it silently.

## 6. Commit

```sh
git config user.name "philly-museums bot"
git config user.email "bot@users.noreply.github.com"
git add data CHANGELOG.md
git commit -m "Weekly reconciliation: YYYY-MM-DD"
git push origin HEAD:main
```

If the push is rejected, push to a branch named `weekly/YYYY-MM-DD` and open a pull request with `gh pr create --fill`.

## 7. Report

Close with a short summary in Chinese: how many museums were checked, how many exhibitions were added and removed, which museums could not be verified, and whether the result went to `main` or to a pull request.
