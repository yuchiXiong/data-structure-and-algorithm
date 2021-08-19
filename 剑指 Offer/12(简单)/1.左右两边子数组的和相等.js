/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  const sum = nums.reduce((sum, item) => (sum += item));
  let lastSum = 0;
  for (let i = 0; i < nums.length; i += 1) {
    lastSum += nums[i - 1] || 0;
    if (lastSum === sum - lastSum - nums[i]) {
      return i;
    }
  }
  return -1;
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6])); // 3
console.log(pivotIndex([1, 2, 3])); // -1
console.log(pivotIndex([2, 1, -1])); // 0
