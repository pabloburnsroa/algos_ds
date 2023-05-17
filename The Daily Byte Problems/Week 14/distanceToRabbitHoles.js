/**
 * 
 * @param {number[][]} array2d 
 * @returns {number[][]}
 * @description 
 * Given a 2D array containing only the following values: -1, 0, 1 where -1 represents an obstacle, 0represents a rabbit hole, and 1represents a rabbit, update every cell containing a rabbit with the distance to its closest rabbit hole.

Note: multiple rabbit may occupy a single rabbit hole and you may assume every rabbit can reach a rabbit hole. A rabbit can only move up, down, left, or right in a single move. Ex: Given the following grid…

-1  0  1
 1  1 -1
 1  1  0
your grid should look like the following after running the function...
-1  0  1
2  1 -1
2  1  0
 */

function approach1(array2d) {
  for (let i = 0; i < array2d.length; i++) {
    for (let j = 0; j < array2d[0].length; j++) {
      if (array2d[i][j] === 1) {
        console.log(array2d[i][j]);
      }
    }
  }

  function dfs() {}
}

let input1 = [
  [-1, 0, 1],
  [1, 1, -1],
  [1, 1, 0],
];

let output = approach1(input1);
console.log(output);
