/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function(nums) {
  const target = nums.sort((a, b) => Math.abs(a) - Math.abs(b))[0]

  return nums.includes(Math.abs(target)) ? Math.abs(target) : target
};