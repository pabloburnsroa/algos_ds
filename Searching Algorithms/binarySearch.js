function binarySearch(sortedArr, val) {
  let l = sortedArr[0];
  let r = sortedArr[sortedArr.length - 1];
  while (r >= l) {
    let middle = Math.floor((l + r) / 2);
    // console.log(middle);
    if (sortedArr[middle] === val) {
      return middle;
    } else if (sortedArr[middle] < val) {
      l = middle + 1;
    } else {
      r = middle - 1;
    }
  }
  return -1;
}

const result1 = binarySearch([1, 2, 5, 7, 19, 22, 32, 56], 222);
console.log(result1);
