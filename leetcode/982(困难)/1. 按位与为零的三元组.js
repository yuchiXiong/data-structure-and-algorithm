/**
 * @param {number[]} nums
 * @return {number}
 */
var countTriplets = function (nums) {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      for (let k = 0; k < nums.length; k++) {
        if ((nums[i] & nums[j] & nums[k]) === 0) result += 1;
      }
    }
  }

  return result;
};