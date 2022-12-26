/**
 * @param {string} s
 * @return {number}
 */
var countHomogenous = function (s) {
  let result = 0, prev = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[prev]) {
      result += i - prev + 1;
    } else {
      result += 1;
      prev = i;
    }
  }

  return result % 1000000007;
};