// Function that accepts a sorted array and find first pair where the sum is 0. Rtn array that includes both values or undefined if a pair does not exist.

// Brute Force
// O(n ^ 2)
function naive(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
  return undefined;
}

// Refactored
function refactored(arr) {
  i = 0;
  j = arr.length - 1;

  while (i < j) {
    let sum = arr[i] + arr[j];
    if (sum === 0) {
      return [arr[i], arr[j]];
    } else if (sum > 0) {
      j--;
    } else {
      i++;
    }
  }

  return undefined;
}

const result1 = refactored([-3, -2, -1, 0, 1, 2, 3]);
const result2 = refactored([-2, 0, 1, 3, 3, 4, 5]);

console.log(result1);
console.log(result2);
