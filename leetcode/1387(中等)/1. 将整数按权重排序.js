/**
 * @param {number} lo
 * @param {number} hi
 * @param {number} k
 * @return {number}
 */
var getKth = function (lo, hi, k) {
  return new Array(hi - lo + 1)
      .fill('')
      .map((_, i) => i + lo)
      .sort((a, b) => getSetp(a) - getSetp(b))[k - 1]
};

const getSetp = (k) => {
  let cur = k;
  let result = 0;
  while (cur !== 1) {
      if (cur % 2 === 0) {
          cur = Math.floor(cur / 2)
      } else {
          cur = cur * 3 + 1;
      }
      result += 1;
  }

  return result;
}