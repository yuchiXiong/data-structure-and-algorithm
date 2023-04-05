/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function (a, b) {
  let result = 0;
  for (let i = 0; i <= Math.min(a, b); i++) {
    if (a % i === 0 && b % i === 0) result += 1;
  }

  return result;
};