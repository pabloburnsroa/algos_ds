/**
 * 
 * @param {*} nums 
 * @param {*} k 
 * @description Given an array of integers, nums, and a value k, return the kth largest element.

Ex: Given the following array nums…

[1, 2, 3], k = 1, return 3.
Ex: Given the following array nums…

[9, 2, 1, 7, 3, 2], k = 5, return 2.
 */
function findTheNumber(nums, k) {
  // sort nums in ascending order?
  nums.sort((a, b) => b - a);
  return nums[k - 1];
}

let nums = [9, 2, 1, 7, 3, 2];
let k = 5;

let output = findTheNumber(nums, k);
console.log(output);
