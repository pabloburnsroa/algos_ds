// Sum of natural numbers

function sumRange(num) {
  // Base case
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

const result1 = sumRange(6);
console.log(result1);
