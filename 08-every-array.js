const scoresArray = [[96, 65, 67, 72, 91], [97, 78, 85, 83, 79]];

// -----------------------------------------------------------------------------
// Don’t edit above this line.
// -----------------------------------------------------------------------------

// TODO refactor to use Array.prototype.every (see https://mzl.la/1eN9HNy)
const results =
  scoresArray
  .map(x => x.every(score => score >= 70))
// Don’t edit below this line.
// -----------------------------------------------------------------------------

const expected = [false, true];

window.FPWorkshop.check(results, expected);
