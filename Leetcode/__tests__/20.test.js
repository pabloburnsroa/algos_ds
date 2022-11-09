const validParentheses = require('../20_ValidParentheses');

let str1 = '[]';
let str2 = '({[';
let str3 = '(]';
let str4 = '{[]}';
let str5 = '([}}])';

test('return validParentheses', () => {
  expect(validParentheses(str1)).toBe(true);
  expect(validParentheses(str2)).toBe(false);
  expect(validParentheses(str3)).toBe(false);
  expect(validParentheses(str4)).toBe(true);
  expect(validParentheses(str5)).toBe(false);
});
