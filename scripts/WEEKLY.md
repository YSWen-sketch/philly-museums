# Weekly reconciliation procedure

This is the working brief for the scheduled agent. A person can follow it by hand just as well.

**Goal:** keep `data.js` matching what each museum's own website says, so that an ordinary visitor planning a weekend can trust it. When in doubt, leave a field alone. An omission is a small problem; an invented date sends someone across the city for nothing.

## 0. Orient

- Work from the repository root. Run `date` to establish today, then read `data.js` and `README.md` so the field meanings are fresh.
- Only these files may be modified: `data.js` and `CHANGELOG.md`. Leave `index.html`, `scripts/` and `.github/` untouched.
- **Everything visitor-facing is bilingual.** The plain key is English, the same key with a `z` suffix is Chinese: `n`/`nz`, `h`/`hz`, `p`/`pz`, `flag`/`flagz`, `d`/`dz`, `sText`/`sTextz`, `eText`/`eTextz`. Whenever you add or change one side, change the other in the same edit. The validator rejects a field that exists in only one language.
- Exhibition titles (`t`) and street addresses (`a`) are not translated; they stay as the museum publishes them.

## 1. Reconcile each museum in `DATA`

For each of the 42 museums:

1. Fetch its `u`, the official exhibitions page. If the page comes back empty, is rendered by JavaScript, or the host refuses the request, try the museum's homepage once, then search the web for `"<museum name>" exhibitions 2026`. **Cap it at three fetches per museum.** Past that, leave the museum's data exactly as it is and record it as unverified in the changelog.

   Several Philadelphia museum sites block automated requests outright or load their listings with JavaScript. As of September 2026 that includes the Historical Society of Pennsylvania, the Free Library, Cliveden, Wyck, Fireman's Hall, the Mütter Museum and the Museum of the American Revolution. Expect a handful of venues to go unverified most weeks. That is a known limitation, not a failure, and it is never a reason to guess.

2. Reconcile against what the website actually says:
   - `shows` — add newly announced exhibitions, remove ones the museum has taken down or that closed more than 30 days ago.
   - Per exhibition: `t` keeps the official title. `s` and `e` take a `YYYY-MM-DD` date **only when the museum states one**; otherwise use `sText`/`sTextz` or `eText`/`eTextz` with the wording as given, such as `eText: "Through November"` with `eTextz: "至 11 月"`. Never infer, round, or invent a date. `d`/`dz` is a one-line description telling a visitor what kind of show it is: roughly 10 to 20 words in English, 10 to 30 characters in Chinese.
   - Update `h`/`hz` (hours), `p`/`pz` (admission) and `flag`/`flagz` (a museum-level notice such as a closure for reinstallation) when they change, matching the formatting of the surrounding entries. English hours use 12-hour times as the museum writes them; Chinese hours use the 24-hour convention already in the file.
   - If `u` is dead and a current official exhibitions page exists, update `u`.
3. Do not rename museums, do not add or restructure groups, and do not drop a museum that simply has nothing on right now — give it `shows: []`. A museum that has closed permanently moves out of `DATA` into `CLOSED`.

## 2. `PLAIN` and `CLOSED`

One fetch each at most. Correct hours, admission or seasonal programming if they have changed. Both lists are bilingual in the same way.

## 3. Page copy

- `LEDE`/`LEDE_ZH` (intro) and `NOTE`/`NOTE_ZH` (footer) change only when something real has changed, such as a major museum closing or a season's worth of shows turning over. Keep each to two sentences and keep the existing tone.
- Set `UPDATED` to today as `"September 14, 2026"` and `UPDATED_ZH` as `"2026 年 9 月 14 日"`.

## 4. Validate

Run `node scripts/validate.js`. It must print ✓. Fix whatever it reports and run it again until it passes. Do not commit a file that fails.

## 5. Record what changed

Add a section to the top of `CHANGELOG.md` headed with today's date, written in English, one line per change naming the museum and what moved. Write "No changes." when nothing did. List any museums that could not be verified this week, with the reason.

## 6. Commit

```sh
git config user.name "philly-museums bot"
git config user.email "bot@users.noreply.github.com"
git add data.js CHANGELOG.md
git commit -m "Weekly reconciliation: YYYY-MM-DD"
git push origin HEAD:main
```

If the push is rejected, push to a branch named `weekly/YYYY-MM-DD` and open a pull request with `gh pr create --fill`.

## 7. Report

Close with a short summary in Chinese: how many museums were checked, how many exhibitions were added and removed, which museums could not be verified, and whether the result went to `main` or to a pull request.
