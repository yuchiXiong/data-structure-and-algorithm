/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        for (let k = 0; k < matrix[i].length; k++) (matrix[i][k] !== 0) && (matrix[i][k] = '*');
        matrix.forEach(item => (item[j] !== 0) && (item[j] = '*'));
      }
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      matrix[i][j] === '*' && (matrix[i][j] = 0);
    }
  }

  return matrix;
};

console.log(setZeroes([[1, 1, 1], [1, 0, 1], [1, 1, 1]])); // [[1,0,1],[0,0,0],[1,0,1]]
console.log(setZeroes([[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]])); // [[0,0,0,0],[0,4,5,0],[0,3,1,0]]