/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
  return nums.sort((a, b) => a - b).filter(i => i < k).length
};