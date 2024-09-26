/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function (nums) {
  let eleSum = 0;
  let numberSum = 0;

  for (let i = 0; i < nums.length; i += 1) {
      let cur = nums[i];
      eleSum += cur;

      while (cur !== 0) {
          numberSum += cur % 10;
          cur = Math.floor(cur / 10)
      }
  }

  return Math.abs(eleSum - numberSum);
};