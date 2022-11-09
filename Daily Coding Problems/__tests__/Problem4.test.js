const solution4 = require('../Problem4');

/*
Testing
*/

let i1 = [3, 4, 1, -1];
let i2 = [7, 8, 9, 11, 12];
let i3 = [-1, -2, -3 - 4];
let i4 = [1, 2, 0];
test('returns lowest +ve int that does not exist in array', () => {
  expect(solution4(i1)).toBe(2);
  expect(solution4(i2)).toBe(1);
  expect(solution4(i3)).toBe(1);
  expect(solution4(i4)).toBe(3);
});
