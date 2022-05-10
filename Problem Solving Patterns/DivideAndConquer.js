// Time complexity = O(N)
function naive(arr, k) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === k) return i;
  }
  return -1;
}

const result1 = naive([1, 3, 4, 5, 6, 11], 11);
console.log(result1);

// Refactored
function refactored(arr,k) {
   
}