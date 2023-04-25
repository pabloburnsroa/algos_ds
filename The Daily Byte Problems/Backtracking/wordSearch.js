/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  let ROWS = board.length;
  let COLS = board[0].length;
  let path = [];

  function helper(r, c, i) {
    if (i === word.length) return true;
    if (
      r < 0 ||
      c < 0 ||
      r >= ROWS ||
      c >= COLS ||
      word[i] !== board[r][c] ||
      path[(r, c)]
    ) {
      return false;
    }
    path.push((r, c));
    let res =
      helper(r + 1, c, i + 1) ||
      helper(r - 1, c, i + 1) ||
      helper(r, c + 1, i + 1) ||
      helper(r, c - 1, i + 1);
    path.pop((r, c));
    return res;
  }
  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLS; j++) {
      helper(i, j, 0) ? true : false;
    }
  }
};
