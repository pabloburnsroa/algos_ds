// Iterative version
function iterative(num) {
  for (let i = num; i > 0; i--) {
    console.log(i);
  }
  console.log('Done!');
  return true;
}

// const result1 = iterative(5);
// console.log(result1);

// Recursive
function recursive(num) {
  // base case
  if (num <= 0) {
    console.log('Done!');
    return;
  }
  console.log(num);
  num--;
  recursive(num);
}

const result2 = recursive(5);
console.log(result2);
