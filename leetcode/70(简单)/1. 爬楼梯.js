/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n === 1) return 1;
  if (n === 2) return 2;
  let ans = [1, 2];
  for (let i = 2; i < n; i++) {
    ans[i] = ans[i - 1] + ans[i - 2];
  }

  return ans[n - 1];
};