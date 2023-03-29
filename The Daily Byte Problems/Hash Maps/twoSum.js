/**
 * Given an array of integers, return whether or not two numbers sum to a given target, k.
Note: you may not sum a number with itself.
 */

function twoSum1(integers, target) {
  const map = {};
  for (let i = 0; i < integers.length; i++) {
    let diff = target - integers[i];
    if (diff in map) {
      return true;
    }
    map[integers[i]] = i;
  }
  return false;
}

/**
[1, 3, 8, 2], k = 10, return true (8 + 2)
[3, 9, 13, 7], k = 8, return false
[4, 2, 6, 5, 2], k = 4, return true (2 + 2)
 */

console.log(twoSum1([1, 3, 8, 2], 10));
