/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function (nums) {

  if (nums.length === 1) return 0;

  const sum = nums.reduce((sum, item) => sum + item, 0);
  const results = [];
  for (let i = 0; i < nums.length; i++) {
    results[i] = (results[i - 1] || 0) + nums[i];
    if ((sum - nums[i]) / 2 === results[i] - nums[i]) return i;
  }

  return -1;

};

console.log(findMiddleIndex([2, 3, -1, 8, 4])) // 3
console.log(findMiddleIndex([1, -1, 4])) // 2
console.log(findMiddleIndex([2, 5])) // -1
console.log(findMiddleIndex([1])) // 0