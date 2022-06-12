/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  for (let i = 0; i < 9; i++) {
    const row = board[i].filter(item => item !== '.');
    if ([...new Set(row)].length < row.length) return false;

    const col = board.map(item => item[i]).filter(item => item !== '.');
    if ([...new Set(col)].length < col.length) return false;
  }

  for (let i = 0; i < 9; i++) {
    const x = i % 3 * 3;
    const y = Math.floor(i / 3) * 3
    const matrix = [
      board[x][y], board[x + 1][y], board[x + 2][y],
      board[x][y + 1], board[x + 1][y + 1], board[x + 2][y + 1],
      board[x][y + 2], board[x + 1][y + 2], board[x + 2][y + 2],
    ].filter(item => item !== '.');
    if ([...new Set(matrix)].length < matrix.length) return false;
  }

  return true;
};

console.log(isValidSudoku(
  [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
  ]
));

console.log(isValidSudoku(
  [
    ["8", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
  ]
));