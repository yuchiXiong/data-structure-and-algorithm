/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let result = '', i = 0;
  while (i < Math.min(word1.length, word2.length)) {
    result += word1[i];
    result += word2[i];
    i++;
  }

  result += word1.length > word2.length ? word1.substr(i, word1.length - i) : word2.substr(i, word2.length - i);
  return result;
};