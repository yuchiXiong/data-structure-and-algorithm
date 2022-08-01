/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function (n) {
  if (n === 1) return 'a';
  if (n % 2 === 0) {
    return "a" + "b".repeat(n - 1);
  } else {
    return "ab" + "c".repeat(n - 2);
  }
};