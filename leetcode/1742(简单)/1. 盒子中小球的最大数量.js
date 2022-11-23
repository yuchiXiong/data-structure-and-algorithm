/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
var countBalls = function (lowLimit, highLimit) {
  return Math.max(...Object.values(new Array(highLimit - lowLimit + 1).fill('').map((_, i) => i + lowLimit).reduce((obj, cur) => {
    const sum = cur.toString().split('').reduce((sum, cur) => sum + Number(cur), 0);
    obj[sum] = obj[sum] ? obj[sum] + 1 : 1;
    return obj;
  }, {})));

};