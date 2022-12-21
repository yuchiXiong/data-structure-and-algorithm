/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var maximumScore = function (a, b, c) {
  if (a + b < c) return a + b;
  if (a + c < b) return a + c;
  if (c + b < a) return c + b;
  return Math.floor((a + b + c) / 2);
};