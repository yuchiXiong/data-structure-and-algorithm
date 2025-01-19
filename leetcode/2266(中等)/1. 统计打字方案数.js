/**
 * @param {string} pressedKeys
 * @return {number}
 */
var countTexts = function (pressedKeys) {
  const groupInfo = group(pressedKeys);

  const result = groupInfo.reduce((result, cur) => {
      const curKeyCount = step(cur[0], cur[1])
      return BigInt(result) % BigInt(Math.pow(10, 9) + 7) * BigInt(curKeyCount) % BigInt(Math.pow(10, 9) + 7)
  }, BigInt(1));

  return Number(result)
};

const group = (pressedKeys) => {
  let preKey = pressedKeys[0];
  let preCount = 1;
  const result = [];

  for (let i = 1; i < pressedKeys.length; i += 1) {
      const cur = pressedKeys[i];
      if (preKey === cur) {
          preCount += 1;
      } else {
          result.push([preKey, preCount]);
          preKey = cur;
          preCount = 1;
      }
  }

  result.push([preKey, preCount]);

  return result
}

const step = (key, count, cache = {}) => {
  if (key === '7' || key === '9') {
      if (count <= 0) return 0;

      const dp = [1, 1, 2, 4]

      if (count < 4) return dp[count];

      for (let i = 4; i <= count; i += 1) {
          dp[i] = (
              dp[i - 1] +
              dp[i - 2] +
              dp[i - 3] +
              dp[i - 4]
          ) % (Math.pow(10, 9) + 7)
      }
      return dp[count] % (Math.pow(10, 9) + 7)
  } else {
      if (count <= 0) return 0;

      const dp = [1, 1, 2];

      if (count < 3) return dp[count];

      for (let i = 3; i <= count; i += 1) {
          dp[i] = (
              dp[i - 1] +
              dp[i - 2] +
              dp[i - 3]
          ) % (Math.pow(10, 9) + 7)
      }
      return dp[count] % (Math.pow(10, 9) + 7)
  }
}