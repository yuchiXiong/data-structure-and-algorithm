/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxValue = function (grid, x = 0, y = 0, cache = {}) {
  if (grid[x] === undefined || grid[x][y] === undefined) return 0;

  const key = `${x}-${y}`;
  if (cache[key]) return cache[key];

  cache[key] = grid[x][y] + Math.max(maxValue(grid, x + 1, y, cache), maxValue(grid, x, y + 1, cache));
  return cache[key];
};
