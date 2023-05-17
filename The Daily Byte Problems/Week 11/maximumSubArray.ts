/**
 * Given an integer array, return the sum of its contiguous subarray that produces the largest value.
Note: Your subarray must contain at least one value.

Ex: Given the following integer arrays…

nums = [-3,8,-8,2], return 8 (8)
nums = [2, 3,-4, 2], return 5 (2 + 3)
nums = [1, 5,-2, -3, 7], return 8 (1 + 5 + (-2) + (-3) + 7)
 */

function maximumSubarray(nums: number[]): number {
  let largestVal = nums[0];

  for (let i = 1, maxHere = nums[0]; i < nums.length; i++) {
    maxHere = Math.max(nums[i], maxHere + nums[i]);
    largestVal = Math.max(largestVal, maxHere);
  }
  return largestVal;
}
