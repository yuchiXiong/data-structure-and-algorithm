/**
 * @param {string} s
 * @param {string} target
 * @return {number}
 */
var rearrangeCharacters = function (s, target) {
  const targetHash = target.split('').reduce((sum, cur) => {
    sum[cur] = (sum[cur] || 0) + 1;
    return sum;
  }, {});
  let hash = {};
  for (let i = 0; i < s.length; i++) {
    if (target.includes(s[i])) {
      hash[s[i]] = (hash[s[i]] || 0) + 1;
    }
  }

  const div = (a, b) => Math.floor((a || 0) / b)
  return Math.min(...Object.keys(targetHash).map(key => div(hash[key], targetHash[key])));
};