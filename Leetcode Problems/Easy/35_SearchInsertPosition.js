/*
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

Input: nums = [1,3,5,6], target = 5
Output: 2

Input: nums = [1,3,5,6], target = 2
Output: 1
*/

// Approach: Binary Search? Divide & Conquer

const searchInsert = (nums, target) => {
  return bs(nums, 0, nums.length - 1, target);
};

const bs = (nums, start, end, target) => {
  if (start > end) {
    return end + 1;
  }
  let mid = Math.floor((start + end) / 2);
  if (nums[mid] < target) {
    return bs(nums, mid + 1, end, target);
  }
  if (nums[mid] > target) {
    return bs(nums, start, mid - 1, target);
  }
  return mid;
};
