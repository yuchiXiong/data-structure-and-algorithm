/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  return nums.findIndex((num, index) => nums.slice(0, index).reduce((sum, cur) => sum + cur, 0) === nums.slice(index + 1).reduce((sum, cur) => sum + cur, 0))
};