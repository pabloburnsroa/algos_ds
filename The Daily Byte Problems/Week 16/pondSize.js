/**
 *
 * @param {[[]]} matrix
 * @description You are given two-dimensional matrix that represents a plot of land. Within the matrix there exist two values: ones which represent land and zeroes which represent water within a pond. Given that parts of a pond can be connected both horizontally and vertically (but not diagonally), return the largest pond size.
Note: You may assume that each zero within a given pond contributes a value of one to the total size of the pond.

Ex: Given the following plot of land…

land = [
    [1,1,1],
    [1,0,1],
    [1,1,1]
], return 1.
Ex: Given the following plot of land…

land = [
    [1,0,1],
    [0,0,0],
    [1,0,1]
], return 5.
 */
function pondSize(matrix) {
  let size = 0;
  let seen = new Set();
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {}
  }

  function helper(matrix, row, col, size) {}
}

let land = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];

let output = pondSize(land);
console.log(output);
