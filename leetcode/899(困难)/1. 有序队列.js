/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var orderlyQueue = function (s, k) {
  if (k === 1) {
    const strs = [];
    for (let i = 0; i < s.length; i++) {
      strs.push(s.slice(i) + s.slice(0, i));
    }
    return strs.sort()[0]
  } else {
    return s.split('').sort().join('');
  }

};