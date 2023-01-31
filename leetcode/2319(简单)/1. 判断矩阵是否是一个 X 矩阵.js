/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var checkXMatrix = function (grid) {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid.length; j++) {
      switch (i) {
        case j:
          if (grid[i][j] === 0) return false;
          break;
        case grid.length - 1 - j:
          if (grid[i][j] === 0) return false;
          break;
        default:
          if (grid[i][j] !== 0) return false;
          break;
      }

    }
  }

  return true;
};