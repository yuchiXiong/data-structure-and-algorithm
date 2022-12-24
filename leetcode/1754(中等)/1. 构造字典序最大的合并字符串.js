/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var largestMerge = function (word1, word2) {
  let result = '';
  while (word1.length || word2.length) {
    if (word1.length === 0) {
      return result + word2;
    }

    if (word2.length === 0) {
      return result + word1;
    }

    if (word2[0] > word1[0]) {
      result += word2[0];
      word2 = word2.slice(1, word2.length);
    } else if (word2[0] === word1[0]) {
      if (word2 > word1) {
        result += word2[0];
        word2 = word2.slice(1, word2.length);
      } else {
        result += word1[0];
        word1 = word1.slice(1, word1.length);
      }
    } else {
      result += word1[0];
      word1 = word1.slice(1, word1.length);
    }
  }

  return result;
};