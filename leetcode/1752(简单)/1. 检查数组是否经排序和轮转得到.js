/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function (nums) {
  let start = -1;
  let pre = nums[0];

  for (let i = 1; i <= nums.length; i++) {
    if (pre > nums[i]) {
      if (start === -1) {
        start = nums[i];
      } else {
        return false;
      }
    }
    pre = nums[i];
  }

  if (start !== -1) return nums[nums.length - 1] <= nums[0];

  return true;
};