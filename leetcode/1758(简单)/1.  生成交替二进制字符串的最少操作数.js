/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function (s) {
  let result1 = 0, result2 = 0;
  for (let i = 0; i < s.length; i++) {
    const curTarget = i % 2 === 0 ? '0' : '1';
    if (s[i] === curTarget) result1++;
    else result2++;
  }

  return Math.min(result1, result2);
};