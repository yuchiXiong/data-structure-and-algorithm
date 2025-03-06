/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {

  const dp = new Array(word1.length + 1).fill(0).map(() => new Array(word2.length + 1).fill(0));

  dp[0].forEach((_, index) => dp[0][index] = index);
  dp.forEach((_, index) => dp[index][0] = index);

  for (let i = 0; i < word1.length; i += 1) {
    for (let j = 0; j < word2.length; j += 1) {
      if (word1[i] === word2[j]) {
        dp[i + 1][j + 1] = dp[i][j]
      } else {
        dp[i + 1][j + 1] = Math.min(
          dp[i][j],
          dp[i][j + 1],
          dp[i + 1][j],
        ) + 1
      }
    }
  }

  return dp[word1.length][word2.length]
};

console.log(minDistance('ros', 'horse')) // 3
console.log(minDistance('', '')) // 0
console.log(minDistance('', 'a')) // 0