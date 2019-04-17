const students = [
  { name: 'Jessica', score: 92 },
  { name: 'Kim', score: 67 },
  { name: 'Fran', score: 85 },
];

// -----------------------------------------------------------------------------
// Don’t edit above this line.
// -----------------------------------------------------------------------------

// TODO: Refactor to use Array.prototype.sort (see https://mzl.la/19buNlz)
let compare = (a,b) => a.score<b.score ? -1 : a.score>b.score ? 1 : 0
let results =
  students.sort(compare)
// -----------------------------------------------------------------------------
// Don’t edit below this line.
// -----------------------------------------------------------------------------

const expected = [
  {
    name: 'Kim',
    score: 67,
  },
  {
    name: 'Fran',
    score: 85,
  },
  {
    name: 'Jessica',
    score: 92,
  },
];

window.FPWorkshop.check(results, expected);
