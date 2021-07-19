/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function (matrix) {
  const result = [];
  for (let i = 0; i < matrix[0].length; i += 1) {
    const subResult = [];
    matrix.map((item) => subResult.push(item[i]));
    result[i] = subResult;
  }
  return result;
};

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(transpose(matrix)); // [[1,4,7],[2,5,8],[3,6,9]]

matrix = [
  [1, 2, 3],
  [4, 5, 6],
];

console.log(transpose(matrix)); // [[1,4],[2,5],[3,6]]
