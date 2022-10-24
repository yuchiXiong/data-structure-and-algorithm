const fs = require('fs');
const case56 = JSON.parse(fs.readFileSync('./case56', 'utf-8'));


/**
 * @param {number[]} nums
 * @return {number}
 */
var partitionDisjoint = function (nums) {
  const hash = {
    [nums.length - 1]: nums[nums.length - 1]
  };

  for (let i = nums.length - 2; i >= 0; i--) {
    hash[i] = Math.min(hash[i + 1], nums[i]);
  }

  let max = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (max <= hash[i + 1]) return i + 1;
    max = Math.max(max, nums[i]);
  }
};

console.log(partitionDisjoint([5, 0, 3, 8, 6])); // 3
console.log(partitionDisjoint([1, 1, 1, 0, 6, 12])); // 4
console.log(partitionDisjoint(case56)); // 13842
console.log(partitionDisjoint([1, 1])); // 1