/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  const dp = []

  for (let i = 0; i <= text2.length; i += 1) {
    for (let j = 0; j <= text1.length; j += 1) {
      if (dp[i] === undefined) {
        dp[i] = [];
      }
      dp[i][j] = 0;
    }
  }

  for (let i = 0; i < text2.length; i += 1) {
    for (let j = 0; j < text1.length; j += 1) {
      if (text2[i] === text1[j]) {
        dp[i + 1][j + 1] = dp[i][j] + 1;
      } else {
        dp[i + 1][j + 1] = Math.max(
          dp[i + 1][j],
          dp[i][j + 1]
        )
      }
    }
  }

  return dp[text2.length][text1.length]
};

/**
 *    _  a  b  c  d  e
 * _  0  0  0  0  0  0
 * a  0  1  1  1  1  1
 * c  0  1  1  2  2  2
 * e  0  1  1  2  2  3
 */

console.log(longestCommonSubsequence("abcde", "ace")) // 3
console.log(longestCommonSubsequence("abc", "abc")) // 3
console.log(longestCommonSubsequence("abc", "def")) // 0