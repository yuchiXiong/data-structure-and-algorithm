/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function (nums) {
  let result = -1;

  for (let i = 0; i < nums.length; i += 1) {
    for (let j = i; j < nums.length; j += 1) {
      if (nums[i] < nums[j] && nums[j] - nums[i] > result) {
        result = nums[j] - nums[i];
      }
    }
  }

  return result;
};