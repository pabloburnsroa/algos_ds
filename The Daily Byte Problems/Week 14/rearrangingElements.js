/**
 * @param {number[]}
 * @description Given an array of numbers, move all zeroes in the array to the end while maintaining the relative order of the other numbers.
Note: You must modify the array you’re given (i.e. you cannot create a new array).

Ex: Given the following array nums…

nums = [3, 7, 0, 5, 0, 2], rearrange nums to look like the following [3,7,5,2,0,0]
 */

function rearrangingElements(nums) {
  let counter = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
    }
  }
  return nums;
}

let nums = [3, 7, 0, 5, 0, 2];
let output = rearrangingElements(nums);
console.log(output);
