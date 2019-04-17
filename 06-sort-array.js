const scores = [96, 65, 67, 72, 91];

// -----------------------------------------------------------------------------
// Don’t edit above this line.
// -----------------------------------------------------------------------------

// TODO: Refactor to use Array.prototype.sort (see https://mzl.la/19buNlz)
let compare = (a,b) => a<b ? -1 : a>b ? 1 : 0
let results =
  scores.sort(compare)
// -----------------------------------------------------------------------------
// Don’t edit below this line.
// -----------------------------------------------------------------------------

const expected = [65, 67, 72, 91, 96];

window.FPWorkshop.check(results, expected);
