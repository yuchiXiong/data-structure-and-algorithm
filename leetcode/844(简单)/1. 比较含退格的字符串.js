/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  return result(s) === result(t);
};

var result = function (s) {
  for (var i = 0; i < s.length; i++) {
    if (s[i] === '#') {
      i > 1 && (s[i - 1] = ' ');
      s[i] = ' '
    };
  }

  return s;
}