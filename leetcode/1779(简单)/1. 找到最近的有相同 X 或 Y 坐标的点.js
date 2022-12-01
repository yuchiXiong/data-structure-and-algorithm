/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function (x, y, points) {
  let minIndex = -1;
  let min = Infinity;
  for (let i = 0; i < points.length; i++) {
    if (x !== points[i][0] && y !== points[i][1]) continue;

    const cur = Math.abs(x - points[i][0]) + Math.abs(y - points[i][1]);
    if (min > cur) {
      min = cur;
      minIndex = i;
    }
  }

  return minIndex;
};