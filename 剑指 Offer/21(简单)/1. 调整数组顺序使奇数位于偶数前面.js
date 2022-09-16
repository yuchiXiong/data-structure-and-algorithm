/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function (nums) {
  return nums.sort((a, b) => b % 2 - a % 2)
};