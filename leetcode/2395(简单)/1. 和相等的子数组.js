/**
 * @param {number[]} nums
 * @return {boolean}
 */
var findSubarrays = function (nums) {
  const map = new Map();
  for (let i = 1; i < nums.length; i++) {
    const first = nums[i - 1];
    const second = nums[i];
    const sum = first + second;
    if (map.get(sum)) return true;
    map.set(first + second, true);
  }

  return false;
};