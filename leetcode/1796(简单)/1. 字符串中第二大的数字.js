/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function (s) {
  return [...new Set(s.replace(/[a-z]/g, '').split(''))].map(i => Number(i)).sort((a, b) => b - a)[1] ?? -1;
};