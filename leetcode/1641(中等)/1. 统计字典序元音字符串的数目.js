/**
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function (n) {
  return (n + 4) * (n + 3) * (n + 2) * (n + 1) / 24;
};