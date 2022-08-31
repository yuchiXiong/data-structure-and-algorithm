/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] = obj[nums[i]] === undefined ? 1 : obj[nums[i]] + 1;
    if (obj[nums[i]] > nums.length / 2) return nums[i];
  }
};