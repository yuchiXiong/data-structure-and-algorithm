/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var rowAndMaximumOnes = function (mat) {
  return mat.map((arr, index) => [index, arr.filter(i => i === 1).length]).sort((a, b) => b[1] - a[1])[0]
};