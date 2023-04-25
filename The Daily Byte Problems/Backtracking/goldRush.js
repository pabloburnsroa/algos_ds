/**
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold = function (grid) {
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] !== 0) count = Math.max(count, helper(grid, i, j));
    }
  }
  return count;
};

let helper = function (grid, row = 0, col = 0, count = 0) {
  if (row < 0 || col < 0 || row >= grid.length || col >= grid[0].length) {
    return count;
  }
  if (grid[row][col] !== 0) {
    let sum = grid[row][col];
    grid[row][col] = 0;
    const left = helper(grid, row - 1, col, count);
    const right = helper(grid, row + 1, col, count);
    const top = helper(grid, row, col - 1, count);
    const bottom = helper(grid, row, col + 1, count);
    grid[row][col] = sum;
    return sum + Math.max(top, bottom, left, right);
  }
  return count;
};
