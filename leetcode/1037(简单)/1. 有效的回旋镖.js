/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isBoomerang = function (points) {

  const a = [points[0][0] - points[1][0], points[2][0] - points[1][0]];
  const b = [points[0][1] - points[1][1], points[2][1] - points[1][1]];

  return a[0] * b[1] - a[1] * b[0] !== 0;
};

console.log(isBoomerang([[0, 0], [0, 2], [2, 1]]));
console.log(isBoomerang([[22, 33], [37, 27], [67, 15]]));
console.log(isBoomerang([[73, 31], [73, 19], [73, 45]]));
console.log(isBoomerang([[73, 31], [73, 19], [73, 45]]));
console.log(isBoomerang([[81, 1], [8, 11], [6, 74]]));