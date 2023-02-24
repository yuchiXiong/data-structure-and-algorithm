/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
  let result = 0;
  while (nums.some(i => i !== 0)) {
    let min = Infinity;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > 0) {
        min = Math.min(nums[i], min);
      }
    }

    nums = nums.map(i => i > 0 ? i - min : i);
    result += 1;
  }

  return result;
};