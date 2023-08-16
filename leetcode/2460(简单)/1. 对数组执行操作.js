/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function (nums) {
  nums.forEach((num, index) => {
    if (index === nums.length - 1) {

    } else {
      if (num === nums[index + 1]) {
        nums[index] = num * 2;
        nums[index + 1] = 0;
      }
    }
  });

  return nums.filter(i => i !== 0).concat(nums.filter(i => i === 0))
};