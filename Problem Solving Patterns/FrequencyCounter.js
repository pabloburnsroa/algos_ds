// Function that accepts 2 arrays and return true if every value in the array has its corresponding value squared in the second array. Freq of values must be same.

// Naive Approach
function naive(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    const correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) return false;
    arr2.splice(correctIndex, 1);
  }
  // console.log(arr2);
  return true;
}

// Refactored approach
function refactored(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  // Count values in arrays
  const counter1 = {};
  const counter2 = {};
  for (let i = 0; i < arr1.length; i++) {
    counter1[arr1[i]] = (counter1[arr1[i]] || 0) + 1;
  }
  for (let i = 0; i < arr2.length; i++) {
    counter2[arr2[i]] = (counter2[arr2[i]] || 0) + 1;
  }
  // Is the squared arr1 value in arr2
  for (let key in counter1) {
    if (!counter2[key ** 2]) return false;
    if (counter2[key ** 2] !== counter1[key]) return false;
  }

  return true;
}

// Should return true
const result1 = refactored([1, 2, 3], [4, 1, 9]);
// Should return false
const result2 = refactored([1, 2, 3], [1, 3]);

console.log(result1);
console.log(result2);
