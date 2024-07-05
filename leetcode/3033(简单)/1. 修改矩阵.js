/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var modifiedMatrix = function (matrix) {
  return matrix.map(row => {
    const newRow = row.map((i, index) => i === -1 ? Math.max(...matrix.map(i => i[index])) : i);
    return newRow;
  })
};