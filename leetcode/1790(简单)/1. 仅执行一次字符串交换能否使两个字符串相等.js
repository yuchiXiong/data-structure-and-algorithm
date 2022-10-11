/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function (s1, s2) {
  if (s1 === s2) return true;

  let count = 0;
  let preIndex = -1;

  for (let i = 0; i < s1.length; i++) {
    if (s2[i] === s1[i]) continue;

    if (count === 1) {
      return s1[i] === s2[preIndex] && s1[preIndex] === s2[i] && s1.substr(i + 1, s1.length) === s2.substr(i + 1, s2.length);
    } else {
      preIndex = i;
      count += 1;
    }
  }

  return false;
};