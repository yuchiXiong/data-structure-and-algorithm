/**
 * @param {string} s
 * @return {number}
 */
var minimumMoves = function (s) {
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'O') continue;

    result += 1;
    i += 2;
  }

  return result;
};