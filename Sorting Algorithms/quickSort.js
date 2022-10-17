/*
Quick Sort
Divide and conquer approach 
Array is divided into subarrays by selecting a pivot element - elements less than pivot array are kept on left side and elements larger are kept on the right side. 
*/

/* SWAP HELPER FUNCTION */
const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

/* PIVOT HELPER FUNCTION 
Designate an element of the array as the pivot - should arrange elements either left or right of pivot and should do this in place (w/o creating a new array) 
Helper function return index of pivot
*/

function pivotHelper(arr, start = 0, end = arr.length - 1) {
  let pivot = arr[start];
  let swapIdx = start;
  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
}

/*
QUICK SORT FUNCTION
*/

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIdx = pivotHelper(arr, left, right);
    quickSort(arr, left, pivotIdx - 1);
    quickSort(arr, pivotIdx + 1, right);
  }
  return arr;
}

// Test
const result1 = quickSort([3, 1, 3, 5, 6, 7, 8, 22, 33]);
console.log(result1);
