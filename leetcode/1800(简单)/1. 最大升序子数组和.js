/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function (nums) {
  let sum = nums[0];
  let subSum = nums[0];
  let pre = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (pre < nums[i]) {
      pre = nums[i];
      subSum += nums[i];
      sum < subSum ? (sum = subSum) : (sum = sum);
    } else {
      pre = nums[i];
      subSum = pre;
    }
  }

  return sum;
};