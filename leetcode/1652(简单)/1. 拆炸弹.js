/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function (code, k) {
  const offsets = new Array(Math.abs(k)).fill('').map((_, i) => i + 1);
  if (k > 0) {
    return code.map((cur, index) => offsets.map(i => code[(index + i) % code.length]).reduce((sum, i) => sum + i, 0));
  } else if (k === 0) {
    return code.map(i => 0);
  } else {
    return code.map((cur, index) => offsets.map(i => code[(index - i + code.length) % code.length]).reduce((sum, i) => sum + i, 0));
  }
};