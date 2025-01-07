/**
 * @param {string} s
 * @return {number}
 */
var countKeyChanges = function(s) {
  let result = 0;
  let preKey = s[0].toLowerCase();

  for (let i = 1; i < s.length; i += 1) {
      if (s[i].toLowerCase() === preKey) {
          continue;
      } else {
          preKey = s[i].toLowerCase();
          result += 1;
      }
  }

  return result;
};