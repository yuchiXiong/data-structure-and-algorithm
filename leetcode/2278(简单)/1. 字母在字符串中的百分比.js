/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
var percentageLetter = function(s, letter) {
  let count = 0;
  for (let i = 0; i < s.length; i += 1) {
      if (s[i] === letter) {
          count += 1;
      }
  }

  return parseInt(count / s.length * 100)
};