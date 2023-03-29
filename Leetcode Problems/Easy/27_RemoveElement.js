const removeElement1 = (nums, val) => {
  let start = 0,
    end = nums.length - 1;

  while (start <= end) {
    if (nums[start] != val) {
      start++;
    }
    if (nums[end] == val) {
      end--;
    }
    nums[start] = nums[end];
    start++;
    end--;
  }
  return start;
};

let removeElement2 = function (nums, val) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    if (nums[left] === val) {
      nums[left] = nums[right];
      right--;
    } else {
      left++;
    }
  }

  return left;
};

function removeElement3(nums, val) {
  return nums.filter((x) => x != val);
}

console.log(removeElement3([3, 2, 2, 3], 3));
