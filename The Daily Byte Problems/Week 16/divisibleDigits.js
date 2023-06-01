/**
 * 
 * @param {Number} N 
 * @return {Number}
 * @description Given an integer N, return the total number self divisible numbers that are strictly less than N (starting from one).
Note: A self divisible number if a number that is divisible by all of its digits.

Ex: Given the following value of N…

N = 17, return 12 because 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15 are all self divisible numbers.
 */

function divisibleDigits(N) {
  let count = 0;
  for (let i = 1; i < N; i++) {
    helper(i) ? count++ : count;
  }

  function helper(n) {
    let num = n.toString();
    for (let digit of num) {
      if (n % digit !== 0 || digit == 0) return false;
    }
    return true;
  }

  return count;
}

let N = 17;
let output = divisibleDigits(N);
// Expect 12
console.log(output);
// 12
