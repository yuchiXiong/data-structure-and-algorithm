/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  return nums.reduce((result, cur, index) => result.concat((index === 0 ? cur : result[index - 1] + cur)), []);
};