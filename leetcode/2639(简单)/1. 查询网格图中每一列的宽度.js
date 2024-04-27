/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findColumnWidth = function(grid) {
  return grid[0].map((_, index) => {
      return Math.max(...grid.map(col => col[index].toString().length))
  })
};