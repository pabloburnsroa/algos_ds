/*
Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

*/

// NAIVE APPROACH \\
function naive(arr) {
  let newArr = [];
  let res = 1;
  for (let i = 0; i < arr.length; i++) {
    res = res * arr[i];
  }
  for (let i = 0; i < arr.length; i++) {
    newArr[i] = res / arr[i];
  }
  return newArr;
}

let arr1 = [1, 2, 3, 4];
let answer1 = naive(arr1);
console.log(`Answer to naive approach:`, answer1);

// END OF NAIVE APPROACH \\

// APPROACH W/O DIVISION \\

function solution(arr) {
  const res = [];
  let prod = 1;
  // 1st iteration
  for (let i = 0; i < arr.length; i++) {
    res.push(prod);
    prod *= arr[i];
  }

  prod = 1;
  // 2nd iteration
  for (let j = arr.length - 1; j >= 0; j--) {
    res[j] *= prod;
    prod *= arr[j];
  }
  return res;
}

let arr2 = [1, 2, 3, 4];
let answer2 = solution(arr2);
console.log('Answer to approach:', answer2);
