/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function (m, n, indices) {
  const matrix = [];
  for (let i = 0; i < m; i++) {
    matrix[i] = new Array(n).fill(0);
  }

  indices.forEach(i => {
    matrix[i[0]] = matrix[i[0]].map(num => num + 1);
    matrix.forEach(row => row[i[1]] += 1);
  });

  return matrix.reduce((sum, i) => sum + i.filter(num => num % 2 === 1).length, 0);
};

console.log(
  oddCells(
    28,
    38,
    [[17, 16], [26, 31], [19, 12], [22, 24], [17, 28], [23, 21], [27, 32], [23, 27], [23, 33], [18, 7], [4, 20], [0, 31], [25, 33], [5, 22]]
  )
);