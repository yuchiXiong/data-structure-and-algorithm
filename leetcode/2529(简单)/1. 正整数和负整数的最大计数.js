/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
  return Math.max(
      nums.filter(i => i < 0).length,
      nums.filter(i => i > 0).length
  )
};