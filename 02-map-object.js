const students = [
  { name: 'Jessica', score: 92 },
  { name: 'Kim', score: 67 },
  { name: 'Fran', score: 85 },
];

// -----------------------------------------------------------------------------
// Don’t edit above this line.
// -----------------------------------------------------------------------------

// TODO: Refactor to use Array.prototype.map (see https://mzl.la/1xVEqhz)
const result = ({score}) => score >= 70 ? 'PASS': 'FAIL'
const results =
  students
  .map(y => juxt(x => x, result)(y))
  .map(x => [x, result(x)])
  .map(([{name}, result]) => `${name}: ${result}`)
// -----------------------------------------------------------------------------
// Don’t edit below this line.
// -----------------------------------------------------------------------------

const expected = ['Jessica: PASS', 'Kim: FAIL', 'Fran: PASS'];

window.FPWorkshop.check(results, expected);
