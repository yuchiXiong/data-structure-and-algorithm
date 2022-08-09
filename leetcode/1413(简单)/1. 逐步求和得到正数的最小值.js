/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function (nums) {
  let min = nums[0];
  let sum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    sum += nums[i];
    min = Math.min(sum, min);
  }

  return min < 0 ? -min + 1 : 1;
};

console.log(minStartValue([-3, 2, -3, 4, 2])); // 5
console.log(minStartValue([1, 2])); // 1
console.log(minStartValue([1, -2, -3])); // 5
