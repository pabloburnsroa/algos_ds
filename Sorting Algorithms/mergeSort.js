/* 
Merge Sort
*/

// HELPER FUNCTION - Merge 2 sorted arrays
function mergingArrays(arr1, arr2) {
  let newSortedArray = [];
  let i = 0;
  let j = 0;
  // Take a look at smallest value in each array (first element as sorted array) - push smallest value to new array and then increment that array comparing next element to other sorted array
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      newSortedArray.push(arr1[i]);
      i++;
    } else {
      newSortedArray.push(arr2[j]);
      j++;
    }
  }
  // When we break out of first while loop, push the remaining values from arrays into new sorted array
  while (i < arr1.length) {
    newSortedArray.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    newSortedArray.push(arr2[j]);
    j++;
  }
  return newSortedArray;
}

// const result1 = mergingArrays([2, 3, 8, 15, 29], [1, 5, 10, 33, 55]);
// console.log(result1);

// MERGE SORT IMPLEMENTATION

function mergeSort(arr) {
  // Base case
  if (arr.length < 2) return arr;
  let arrSize = arr.length;
  let middle = Math.floor(arrSize / 2);
  // Divide array into halves until arrays are either empty or have 1 element
  let left = mergeSort(arr.slice(0, middle));
  let right = mergeSort(arr.slice(middle));
  return mergingArrays(left, right);
}

const result2 = mergeSort([3, 1, 5, 12, 4, 33]);
console.log(result2);
