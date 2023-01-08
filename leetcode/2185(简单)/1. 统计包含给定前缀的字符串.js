/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function (words, pref) {
  const isStartsWith = str => (word) => word.startsWith(str);
  const isStartsWithPref = isStartsWith(pref);

  return words.filter(isStartsWithPref).length;
};