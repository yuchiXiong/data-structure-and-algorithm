/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isBoomerang = function (points) {

  if (points[0].join('!') === points[1].join('!')
    || points[1].join('!') === points[2].join('!')
    || points[0].join('!') === points[2].join('!')) return false;

  if (points[0][0] === points[0][1]
    && points[0][1] === points[0][2]
    && points[0][2] === points[0][0]) return false;

  const a = (points[0][1] - points[1][1]) / (points[0][0] - points[1][0]);
  const b = (points[1][1] - points[2][1]) / (points[1][0] - points[2][0]);

  return a != b;
};

console.log(isBoomerang([[0, 0], [0, 2], [2, 1]]));
console.log(isBoomerang([[22, 33], [37, 27], [67, 15]]));
console.log(isBoomerang([[73, 31], [73, 19], [73, 45]]));
console.log(isBoomerang([[73, 31], [73, 19], [73, 45]]));
console.log(isBoomerang([[81, 1], [8, 11], [6, 74]]));