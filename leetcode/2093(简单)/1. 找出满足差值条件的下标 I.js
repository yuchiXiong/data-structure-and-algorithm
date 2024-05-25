/**
 * @param {number[]} nums
 * @param {number} indexDifference
 * @param {number} valueDifference
 * @return {number[]}
 */
var findIndices = function(nums, indexDifference, valueDifference) {
  for (let i = 0; i < nums.length; i += 1) {
      let restIndex = i + indexDifference;
      while (restIndex < nums.length) {
          if (Math.abs(nums[i] - nums[restIndex]) >= valueDifference) return [i, restIndex]

          restIndex += 1;
      }
  }

  return [-1, -1]
};