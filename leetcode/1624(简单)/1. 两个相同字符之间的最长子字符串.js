/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function (s) {
  return Math.max(...s.split('').map(char => s.lastIndexOf(char) - s.indexOf(char) - 1))
};