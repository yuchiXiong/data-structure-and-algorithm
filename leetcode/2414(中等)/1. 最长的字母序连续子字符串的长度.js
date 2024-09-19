/**
 * @param {string} s
 * @return {number}
 */
var longestContinuousSubstring = function (s) {

  const dict = "abcdefghijklmnopqrstuvwxyz";
  const posMap = dict.split('').reduce((obj, cur, index) => {
    obj[cur] = index;
    return obj;
  }, {});

  let maxResult = 0;
  for (let i = 0; i < s.length; i += 1) {
    const start = posMap[s[i]];
    let result = 0;
    while (s[i + result] === dict[start + result]) {
      result += 1;
      if (start + result >= dict.length || i + result >= s.length) break;
    }
    maxResult = Math.max(maxResult, result);
  }

  return maxResult;
};

console.log(longestContinuousSubstring('z'))


console.time('test')
console.log(longestContinuousSubstring("cpvxipfjdcqmticveqxqujtswujedvetgwnquatjdkanzoxrrdfdfdyeujadgnuhnrnxrzqzjdtwqvroujkh"));
console.timeEnd('test')