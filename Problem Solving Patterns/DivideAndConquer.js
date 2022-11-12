// Time complexity = O(N)
function naive(arr, k) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === k) return i;
  }
  return -1;
}

// Refactored
function refactored(arr, k) {}

// Binary Search
// Log(N)

function search(array, val) {
  let min = 0;
  let max = array.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentElement = array[middle];

    if (currentElement < val) {
      min = middle + 1;
    } else if (currentElement > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
}

const result1 = search([1, 3, 4, 5, 6, 11], 11);
console.log(result1);
