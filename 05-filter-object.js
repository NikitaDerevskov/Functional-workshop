const students = [
  { name: 'Jessica', score: 92 },
  { name: 'Kim', score: 67 },
  { name: 'Fran', score: 85 },
];

// -----------------------------------------------------------------------------
// Don’t edit above this line.
// -----------------------------------------------------------------------------

// TODO: Refactor to use Array.prototype.filter (see https://mzl.la/1dDn8fQ)
let results =
  students
  .filter(xs => xs.score >= 70)

// -----------------------------------------------------------------------------
// Don’t edit below this line.
// -----------------------------------------------------------------------------

const expected = [
  {
    name: 'Jessica',
    score: 92,
  },
  {
    name: 'Fran',
    score: 85,
  },
];

window.FPWorkshop.check(results, expected);
