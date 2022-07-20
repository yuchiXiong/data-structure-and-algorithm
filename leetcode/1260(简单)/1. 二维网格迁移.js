/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function (grid, k) {
  const m = grid.length, n = grid[0].length;

  if (k % (m * n) === 0) return grid;

  if (k % n === 0) {
    for (let i = 0; i < Math.floor(k / n); i++) {
      grid.unshift(grid.pop());
    }

    return grid;
  }

  const flat = grid.flat();
  for (let i = 0; i < k; i++) {
    flat.unshift(flat.pop());
  }
  const result = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (j === 0) {
        result[i] = [flat[i * n + j]];
      } else {
        result[i].push(flat[i * n + j]);
      }
    }
  }

  return result;
};