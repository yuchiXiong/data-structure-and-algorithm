/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function (mat) {
  let ans = 0;
  mat.forEach((row, i) => {
    row.forEach((col, j) => {
      if (
        (col === 1) &&
        row.filter((_, index) => index !== j).every(i => i === 0) &&
        mat.filter((_, index) => index !== i).every(k => k[j] === 0)
      ) ans++;
    })
  })

  return ans;
};