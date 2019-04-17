const students = [
  { name: 'Jessica', scores: [92, 98, 80] },
  { name: 'Kim', scores: [67, 65, 63] },
  { name: 'Fran', scores: [85, 68, 91] },
];

// -----------------------------------------------------------------------------
// Don’t edit above this line.
// -----------------------------------------------------------------------------

// TODO refactor to use Array.prototype.some (see https://mzl.la/1AhWtg0)
let results =
  students
  .map(x => ({name: x.name, pass: x.scores.some(score => score >= 70)}))
// -----------------------------------------------------------------------------
// Don’t edit below this line.
// -----------------------------------------------------------------------------

const expected = [
  { name: 'Jessica', pass: true },
  { name: 'Kim', pass: false },
  { name: 'Fran', pass: true },
];

window.FPWorkshop.check(results, expected);
