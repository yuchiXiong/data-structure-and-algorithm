/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  if (s.length === 1) return false;
  let perfix = '';

  for (let i = 0; i < s.length / 2; i++) {
    perfix += s[i];
    if (perfix.repeat(s.length / (i + 1)) === s) return true;
  }

  return false;
};