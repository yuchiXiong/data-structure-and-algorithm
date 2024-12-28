/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossibleToSplit = function(nums) {
  const countMap = nums.reduce((result, cur) => {
      if (result[cur] === undefined) {
          result[cur] = 1;
      } else {
          result[cur] += 1;
      }

      return result;
  }, {});

  return Object.values(countMap).every(i => i <= 2);
};