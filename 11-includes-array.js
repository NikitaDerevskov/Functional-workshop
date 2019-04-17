const classArray = [
  ['input', 'input--name', 'input--active'],
  ['input', 'input--email'],
];

// -----------------------------------------------------------------------------
// Don’t edit above this line.
// -----------------------------------------------------------------------------

// TODO refactor to use Array.prototype.includes (see https://mzl.la/2pE5Eg5)
let results =
  classArray
  .filter(x => x.includes('input--active'))
// -----------------------------------------------------------------------------
// Don’t edit below this line.
// -----------------------------------------------------------------------------

const expected = [['input', 'input--name', 'input--active']];

window.FPWorkshop.check(results, expected);
