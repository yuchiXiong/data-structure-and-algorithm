/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  const hash = {};
  for (let i = 0; i < s.length; i++) {
    hash[s[i]] = hash[s[i]] ? hash[s[i]] + 1 : 1;
  }

  const len = Object.values(hash).reduce((sum, cur) => sum + (cur % 2 === 0 ? cur : cur - 1), 0);

  return Object.values(hash).filter(i => i % 2 === 1).length > 0 ? len + 1 : len;
};

console.log(longestPalindrome("abccccdd"))