/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
  if (r * c !== mat.length * mat[0].length) return mat;
  const result = [];
  let k = 0;
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      result[Math.floor(k / c)] || (result[Math.floor(k / c)] = []);
      result[Math.floor(k / c)][k % c] = mat[i][j];
      k++;
    }
  }

  return result;
};

console.log(matrixReshape([[1, 2], [3, 4]], 1, 4)); // [[1,2,3,4]]
console.log(matrixReshape([[1, 2], [3, 4]], 2, 4)); // [[1,2],[3,4]]
console.log(matrixReshape([[1, 2]], 1, 1)); // [[1,2]]