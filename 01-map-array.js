const scores = [92, 67, 85];

// -----------------------------------------------------------------------------
// Don’t edit above this line.
// -----------------------------------------------------------------------------

// TODO: Refactor to use Array.prototype.map (see https://mzl.la/1xVEqhz)
const results = scores
.map(x => x>= 70 ? 'PASS': 'FAIL')
console.log(results)
// -----------------------------------------------------------------------------
// Don’t edit below this line.
// -----------------------------------------------------------------------------

const expected = ['PASS', 'FAIL', 'PASS'];

window.FPWorkshop.check(results, expected);
