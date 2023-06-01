/**
 * 
 * @param {*} s 
 * @description Given a string s, return the length of the longest substring containing at most two distinct characters.
Note: You may assume that s only contains lowercase alphabetical characters.

Ex: Given the following value of s…

s = "aba", return 3.
Ex: Given the following value of s…

s = "abca", return 2.
 */
function twoUniqueCharacters(s) {
  if (s === null || s.length === 0) return 0;
  let chs = s.split('');
  let n = s.length;
  let chsMap = new Map();
  let longest = 0;
  for (let i = 0; i < n; i++) {
    
  }

  return { chs, n };
}

let s = 'aba';
let output = twoUniqueCharacters(s);
console.log(output);
