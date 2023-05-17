/**
 * 
 * @param {*} nums 
 * @description Given an array nums, return whether or not its values are monotonically increasing or monotonically decreasing.
Note: An array is monotonically increasing if for all values i <= j, nums[i] <= nums[j]. Similarly an array is monotonically decreasing if for all values i <= j, nums[i] >= nums[j].

Ex: Given the following array nums…

nums = [1, 2, 3, 4, 4, 5], return true.
Ex: Given the following array nums…

nums = [7, 6, 3], return true.
Ex: Given the following array nums…

nums = [8, 4, 6], return false.

 */

function isMonotonic(A) {
  // Two pass
  // return twoPass(A);

  // One pass - simple
  // return onePassSimple(A);

  // One pass - stream of comparisons
  return onePassStream(A);
}

function twoPass(A) {
  return increasing(A) || decreasing(A);
  function increasing(A) {
    for (let i = 0; i < A.length - 1; i++) {
      if (A[i] > A[i + 1]) return false;
    }
    return true;
  }
  function decreasing(A) {
    for (let i = 0; i < A.length - 1; i++) {
      if (A[i] < A[i + 1]) return false;
      return true;
    }
  }
}

function onePassSimple(A) {
  let increasing = true;
  let decreasing = true;
  for (let i = 0; i < A.length; i++) {
    if (A[i] > A[i + 1]) {
      increasing = false;
    }
    if (A[i] < A[i + 1]) {
      decreasing = false;
    }
  }
  return increasing || decreasing;
}

function onePassStream(A) {
  let store = 0;
}

let nums = [5, 4, 3, 2, 1];
let output = isMonotonic(nums);
console.log(output);
