// Find maxSumSubarray

function findMaxSumSubarray(arr, k) {
  let maxValue = 0;
  let currentRunningSum = 0;

  for (let i = 0; i < arr.length; i++) {
    currentRunningSum += arr[i];
    if (i >= k - 1) {
      maxValue = Math.max(maxValue, currentRunningSum);
      currentRunningSum -= arr[i - (k - 1)];
    }
    // console.log(maxValue, currentRunningSum);
  }
  return maxValue;
}

const result1 = findMaxSumSubarray([1, 2, 4, 6, 7, 1, 2, 4], 3);
console.log(result1);

// Find smallest subarray with given sum

function findSmallestSubarrary(arr, k) {
  let windowStart = 0;
  let minSize = Infinity;
  let currentSum = 0;
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    currentSum += arr[windowEnd];
    while (currentSum >= k) {
      minSize = Math.min(minSize, windowEnd - windowStart + 1);
      currentSum -= arr[windowStart];
      windowStart++;
    }
  }

  return minSize;
}

const result2 = findSmallestSubarrary([4, 2, 2, 7, 8, 1, 2, 8, 1, 0], 8);
console.log(result2);
