/**
 * @description Given a positive integer N, return whether or not it has alternating bit values.

Ex: Given the following value for N…

N = 5, return true.
5 in binary is 101 which alternates bit values between 0 and 1.
Ex: Given the following value for N…

N = 8, return false
8 in binary is 1000 which does not alternate bit values between 0 and 1.
 */

function flipFloppingBits(N) {
  // Integer to Bit
  let bit = N.toString(2);
  console.log(bit);
  // Iterate over bit values and check if prev is different to current
  for (let i = 1; i < bit.length; i++) {
    if (bit[i] == bit[i - 1]) return false;
  }
  return true;
}

console.log(flipFloppingBits(5));
