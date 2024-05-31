/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function(grid) {
  const n = grid.length;
  const map = grid.reduce((result, cur) => {
      cur.forEach(i => result[i] = result[i] ? result[i] + 1 : 1)
      return result;
  }, {});

  return [
      Object.keys(map).filter(i => map[i] === 2),
      new Array(n * n).fill('').map((_, i) => i + 1).filter(i => map[i] === undefined)
  ]
};