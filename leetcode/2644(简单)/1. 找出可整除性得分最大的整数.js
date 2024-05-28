/**
 * @param {number[]} nums
 * @param {number[]} divisors
 * @return {number}
 */
var maxDivScore = function (nums, divisors) {
  const map = divisors.reduce((obj, cur) => {
      obj[cur] = nums.filter(i => i % cur === 0).length
      return obj;
  }, {});

  const min = Math.max(...Object.values(map));

  return Math.min(...Object.keys(map).filter(i => map[i] === min))
};