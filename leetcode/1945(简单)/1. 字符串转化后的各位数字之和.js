/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function (s, k) {

  let str = s.split('').reduce((sum, cur) => sum + (cur.charCodeAt() - 96), '')
  for (let i = 0; i < k; i++) {
    str = str.split('').reduce((sum, cur) => sum + Number(cur), 0).toString();
  }

  return str;
};