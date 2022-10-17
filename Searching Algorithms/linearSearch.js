function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
  return -1;
}

const result1 = linearSearch([10, 14, 325, 20, 30, 15], 15);
const result2 = linearSearch([3, 1, 4, 55, 2, 11], 4);
const result3 = linearSearch([10, 14, 325, 20, 30, 15], 6);

console.log(result1);
console.log(result2);
console.log(result3);
