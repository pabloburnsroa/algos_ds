/**
 * 
 * @param {*} nums
 * @description Given an array of integers, nums, sort the array in any manner such that when i is even, nums[i] is even and when i is odd, nums[i] is odd.
Note: It is guaranteed that a valid sorting of nums exists.

Ex: Given the following array nums…

nums = [1, 2, 3, 4], one possible way to sort the array is [2,1,4,3] 
 */
function arrayShuffle(nums) {
  let even = 0;
  let odd = 1;

  while (even < nums.length && odd < nums.length) {
    if (isEven(nums[even])) {
      even += 2;
    } else if (!isEven(nums[odd])) {
      odd += 2;
    } else {
      [nums[even], nums[odd]] = [nums[odd], nums[even]];
      even += 2;
      odd += 2;
    }
  }

  return nums;

  function isEven(value) {
    if (value % 2 == 0) {
      return true;
    } else {
      return false;
    }
  }
}

let nums = [1, 2, 3, 4];
let output = arrayShuffle(nums);
console.log(output);
