/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function (s) {
  return Math.max(...s.split('').map((char, i) => {
    if (i === s.length - 1) return 0;
    return s.split('').splice(0, i + 1).filter(i => i === '0').length + s.split('').splice(i + 1, s.length).filter(i => i === '1').length
  }));
};
console.log(maxScore("011101")); // 5
console.log(maxScore("00111")); // 5
console.log(maxScore("1111")); // 3