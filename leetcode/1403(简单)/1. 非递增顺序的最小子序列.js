/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function (nums) {
  const ans = [];
  let sum = nums.reduce((a, b) => a + b, 0);
  let curSum = 0;
  nums.sort((a, b) => b - a).forEach((item, index) => {
    if (curSum <= sum / 2) {
      ans.push(item);
      curSum += item;
    }
  });
  return ans;
};

console.log(minSubsequence([4, 3, 10, 9, 8])); // [10, 9]