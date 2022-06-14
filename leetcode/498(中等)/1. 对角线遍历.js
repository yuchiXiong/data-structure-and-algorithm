/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function (mat) {
  const result = [];
  let vx = 1, vy = 1, x = 0, y = 0;
  while (x < mat.length && y < mat[0].length) {
    result.push(mat[x][y]);
    if (((x === 0) || (y === mat[0].length - 1)) && vy === 1) {
      y + 1 === mat[0].length ? x++ : y++;
      vy = -1;
      vx = 1;
    }
    else if (((y === 0) || (x === mat.length - 1)) && vx === 1) {
      x + 1 === mat.length ? y++ : x++;
      vy = 1;
      vx = -1;
    } else {
      x += vx;
      y += vy;
    }
  }

  return result;
};

/**
 * 1 2 3
 * 4 5 6
 * 7 8 9
 */
console.log(findDiagonalOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]])); // [1,2,4,7,5,3,6,8,9]
console.log(findDiagonalOrder([[1, 2], [3, 4]])); // [1,2,3,4]