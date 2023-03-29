/**

Given a string, reverse all of its characters and return the resulting string.

Ex: Given the following strings...
“Cat”, return “taC”
“The Daily Byte”, return "etyB yliaD ehT”
“civic”, return “civic”
 
 */

function reverseString(s: string[]) {
  let left = 0;
  let right = s.length - 1;
  while (left <= right) {
    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
  }
  return s;
}

reverseString(['C', 'a', 't']);
