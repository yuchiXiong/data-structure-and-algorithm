/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumIndicesWithKSetBits = function (nums, k) {
  return nums.filter((num, index) => {
    const hex = index.toString(2);
    return hex.split('').filter(i => i === '1').length === k;
  }).reduce((sum, cur) => cur + sum, 0);
};