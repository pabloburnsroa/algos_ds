/**
 *
 * @param isConnected
 * @return {number}
 * @description
 * There are n cities. Some of them are connected, while some are not. If city a is connected directly with city b, and city b is connected directly with city c, then city a is connected indirectly with city c.

A province is a group of directly or indirectly connected cities and no other cities outside of the group.

You are given an n x n matrix isConnected where isConnected[i][j] = 1 if the ith city and the jth city are directly connected, and isConnected[i][j] = 0 otherwise.

Return the total number of provinces.
 */

function findCircleNum(isConnected: number[][]): number {
  let provinces = 0;
  let visted = new Set();

  // Traverse isConnected matrix
  for(let i = 0)
}

let isConnected1 = [
  [1, 1, 0],
  [1, 1, 0],
  [0, 0, 1],
];

let example1 = findCircleNum(isConnected1);
