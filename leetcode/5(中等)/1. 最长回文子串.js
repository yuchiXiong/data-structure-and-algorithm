/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let dp = s[0];
  let result = s[0];

  for (let i = 1; i < s.length; i++) {
    if (dp.length === i && dp[0] !== s[i]) {
    } else {
      let first = s.indexOf(s[i]);
      if (first >= i) {
        dp = s[0];
        continue;
      }
      while (first < i) {

        const sub = s.slice(first, i + 1);
        if (_cond(sub)) {
          dp = sub;
          break;
        }

        first = s.indexOf(s[i], first + 1);
      }

      result = result.length < dp.length ? dp : result;
    }
  }

  return result;
};

const _cond = s => {
  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    if (s[i] !== s[s.length - i - 1]) return false;
  }

  return true;
}


console.log(longestPalindrome("babad")); // "bab"
console.log(longestPalindrome("cbbd")); // "bb"
console.log(longestPalindrome("ac")); // "a"
console.log(longestPalindrome("a")); // "a"
console.log(longestPalindrome("aacabdkacaa")); // "aca"