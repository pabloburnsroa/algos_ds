/*
Selection Sort
*/

const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (arr[min] != arr[i]) {
      swap(arr, min, i);
    }
  }
  return arr;
}

const result1 = selectionSort([4, 1, 5, 7, 8, 3, 3]);
console.log(result1);
