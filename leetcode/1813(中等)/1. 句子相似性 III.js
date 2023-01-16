/**
 * @param {string} sentence1
 * @param {string} sentence2
 * @return {boolean}
 */
var areSentencesSimilar = function (sentence1, sentence2) {

  const _s1 = sentence1.split(' ');
  const _s2 = sentence2.split(' ');
  while (_s1.length && _s2.length) {
    if (_s1[0] !== _s2[0] && _s1[_s1.length - 1] !== _s2[_s2.length - 1]) {
      return false;
    } else if (_s1[0] === _s2[0]) {
      _s1.shift();
      _s2.shift();
    } else if (_s1[_s1.length - 1] === _s2[_s2.length - 1]) {
      _s1.pop();
      _s2.pop();
    }
  }

  return true;
};