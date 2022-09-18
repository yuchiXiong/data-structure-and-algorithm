/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix.length; j++) {
      const tmp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = tmp;
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < Math.floor(matrix.length / 2); j++) {
      const tmp = matrix[i][j];
      matrix[i][j] = matrix[i][matrix.length - j - 1];
      matrix[i][matrix.length - j - 1] = tmp;
    }
  }
};

/**
 * 00 -> 02
 * 01 -> 12
 * 03 -> 22
 */
console.log(rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]])); // [[7,4,1],[8,5,2],[9,6,3]]
// console.log(rotate([[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]])); // [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]