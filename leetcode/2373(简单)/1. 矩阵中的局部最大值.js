/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function (grid) {
  const result = [];

  for (let i = 0; i < grid.length - 2; i++) {
    for (let j = 0; j < grid[i].length - 2; j++) {
      if (result[i]) {
        result[i].push(maxOfThreeMatrix(grid, i, j, i + 2, j + 2));
      } else {
        result[i] = [maxOfThreeMatrix(grid, i, j, i + 2, j + 2)];
      }
    }
  }

  return result;
};

const maxOfThreeMatrix = (grid, x1, y1, x2, y2) => {
  let max = grid[x1][y1];

  for (let i = x1; i <= x2; i++) {
    for (let j = y1; j <= y2; j++) {
      max = Math.max(grid[i][j], max);
    }
  }

  return max;
}