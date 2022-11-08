/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
  return words.filter(word => word.split('').every(char => allowed.includes(char))).length;
};