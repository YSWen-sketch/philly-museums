// Which city the weekly refresh works on.
//
// One city per week, in priority order, so each city comes round every four
// weeks — roughly monthly. The cycle is anchored to a fixed Thursday rather
// than to the calendar year, so it never resets or skips at a year boundary.
//
// Usage: node scripts/rotation.js [YYYY-MM-DD]   ->  prints the city id

// Priority order: the cycle starts here and repeats.
const ORDER = ["philadelphia", "newyork", "washington", "boston"];

// Thursday, 1 January 2026. Any Thursday works; this one keeps the numbers small.
const ANCHOR = Date.UTC(2026, 0, 1);
const WEEK = 7 * 24 * 60 * 60 * 1000;

// Whole weeks elapsed since the anchor, counting the UTC date only so that the
// time of day the job happens to run cannot shift the answer.
function weeksSinceAnchor(date) {
  const day = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
  return Math.floor((day - ANCHOR) / WEEK);
}

function cityForWeek(date = new Date()) {
  const w = weeksSinceAnchor(date);
  return ORDER[((w % ORDER.length) + ORDER.length) % ORDER.length];
}

// The next date on or after `from` on which `city` comes round. Used by the
// docs and the smoke test; not needed by the refresh itself.
function nextTurn(city, from = new Date()) {
  const d = new Date(Date.UTC(from.getUTCFullYear(), from.getUTCMonth(), from.getUTCDate()));
  for (let i = 0; i < 7 * ORDER.length + 7; i++) {
    if (cityForWeek(d) === city && d.getUTCDay() === 4) return new Date(d);
    d.setUTCDate(d.getUTCDate() + 1);
  }
  return null;
}

module.exports = { ORDER, cityForWeek, weeksSinceAnchor, nextTurn };

if (require.main === module) {
  const arg = process.argv[2];
  const when = arg ? new Date(arg + "T12:00:00Z") : new Date();
  if (isNaN(when.getTime())) {
    console.error("usage: node scripts/rotation.js [YYYY-MM-DD]");
    process.exit(1);
  }
  console.log(cityForWeek(when));
}
