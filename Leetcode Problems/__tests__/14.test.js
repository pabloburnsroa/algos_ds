const longestCommonPrefix = require('../14_LongestCommonPrefix');

let strs1 = ['flower', 'flow', 'flight'];
let strs2 = ['dog', 'racecar', 'car'];

test('return longestCommonPrefix', () => {
  expect(longestCommonPrefix(strs1)).toBe('fl');
  expect(longestCommonPrefix(strs2)).toBe('');
});
