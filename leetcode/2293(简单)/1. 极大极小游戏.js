/**
 * @param {number[]} nums
 * @return {number}
 */
var minMaxGame = function (nums) {
  while (nums.length !== 1) {
    nums = new Array(nums.length / 2).fill('').map((_, i) => {
      if (i % 2 === 0) {
        return Math.min(nums[2 * i], nums[2 * i + 1]);
      } else {
        return Math.max(nums[2 * i], nums[2 * i + 1]);
      }
    })
  }

  return nums[0];
};