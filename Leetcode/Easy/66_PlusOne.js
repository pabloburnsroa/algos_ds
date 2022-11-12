/*

You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.

*/

const plusOne = (digits) => {
  let one = 1,
    i = digits.length - 1;

  while (one) {
    if (i >= 0) {
      if (digits[i] == 9) {
        digits[i] = 0;
      } else {
        digits[i] += 1;
        one = 0;
      }
    } else {
      digits.unshift(1);
      one = 0;
    }
    i -= 1;
  }

  return digits;
};

let dig = [1, 2, 9];
console.log(plusOne(dig));
