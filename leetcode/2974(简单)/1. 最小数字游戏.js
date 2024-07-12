/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function (nums) {
  nums.sort((a, b) => a - b);
  return nums.map((i, index) => {
    if (index % 2 === 1) return nums[index - 1]
    return nums[index + 1]
  })
};