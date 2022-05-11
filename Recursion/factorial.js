// Iterative

function iterative(k) {
  let total = 1;
  for (let i = k; i > 0; i--) {
    total *= i;
  }
  return total;
}

const result1 = iterative(4);
console.log(result1);

// Recursive

function recursive(k) {
  // base case
  if (k === 1) return 1;
  console.log(k);
  return k * recursive(k - 1);
}

const result2 = recursive(4);
console.log(result2);
