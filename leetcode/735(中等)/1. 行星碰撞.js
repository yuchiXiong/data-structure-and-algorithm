/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  const dp = [asteroids[0]];

  for (let i = 1; i < asteroids.length; i++) {
    dp.push(asteroids[i]);

    if (asteroids[i] < 0) {
      const cur = asteroids[i];

      while (dp.length >= 2 && dp[dp.length - 1] < 0) {
        const pre = dp[dp.length - 2];

        if (pre < 0) break;

        if (Math.abs(pre) < Math.abs(cur)) {
          dp[dp.length - 2] = dp[dp.length - 1];
          dp.pop();
        } else if (Math.abs(pre) > Math.abs(cur)) {
          dp.pop();
          break;
        } else {
          dp.pop();
          dp.pop();
        }
      }
    }
  }

  return dp;
};

console.log(asteroidCollision([5, 10, -5])); // [5,10]
console.log(asteroidCollision([8, -8])); // []
console.log(asteroidCollision([10, 2, -5])); // [10]
console.log(asteroidCollision([-2, -1, 1, 2])); // [-2,-1,1,2]
console.log(asteroidCollision([-2, -2, 1, -2])); // [-2,-2,-2]