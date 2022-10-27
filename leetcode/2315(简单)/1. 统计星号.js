/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function (s) {
  let flag = false;
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    if (flag) {
      if (s[i] === '|') flag = false;
      else continue;
    } else {
      if (s[i] === '|') flag = true;
      else if (s[i] === '*') result += 1;
    }
  }
  return result;
};