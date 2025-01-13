/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplitArray = function(nums) {
  const total = nums.reduce((result, cur) => result + cur, 0);

  let prefixTotal = 0;
  let result = 0;
  for (let i = 0; i < nums.length - 1; i += 1) {
      prefixTotal += nums[i];

      if (prefixTotal >= total - prefixTotal) {
          result += 1;
      }
  }

  return result;
};