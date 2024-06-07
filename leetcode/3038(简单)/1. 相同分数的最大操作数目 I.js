/**
 * @param {number[]} nums
 * @return {number}
 */
var maxOperations = function (nums) {
  let prev = 0;
  let result = 0;
  do {
      const cur = nums.slice(0, 2).reduce((result, cur) => result + cur, 0);
      prev = cur;
      nums = nums.slice(2)
      result += 1;
  } while (nums.slice(0, 2).reduce((result, cur) => result + cur, 0) === prev && nums.slice(0, 2).length === 2)
  return result
};