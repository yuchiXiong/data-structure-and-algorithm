/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function (sequence, word) {
  let result = 1;
  while (sequence.includes(word.repeat(result))) {
    result++;
  }

  return result - 1;
};