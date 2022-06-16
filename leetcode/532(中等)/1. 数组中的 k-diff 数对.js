/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function (nums, k) {
  const hash = {};
  const results = [];

  for (let i = 0; i < nums.length; i++) {

    let minTarget = null;
    let maxTarget = null;
    if (hash[nums[i] - k]) {
      minTarget = nums[i] - k;
    }
    if (hash[nums[i] + k]) {
      maxTarget = nums[i] + k;
    }

    if (hash[minTarget] || hash[maxTarget]) {

      hash[minTarget] && results.push([minTarget, nums[i]]);
      hash[maxTarget] && results.push([maxTarget, nums[i]]);

      hash[nums[i] - k]
        ? hash[nums[i] - k] = nums[i]
        : hash[nums[i] + k] = nums[i];
    }

    (hash[nums[i]] === undefined) && (hash[nums[i]] = '*');
  }
  // console.log(results);
  return [...new Set(results.map(item => item.sort().toString()))].length;
};

console.log(findPairs([3, 1, 4, 1, 5], 2)); // 2
console.log(findPairs([1, 2, 3, 4, 5], 1)); // 4
console.log(findPairs([1, 3, 1, 5, 4], 0)); // 1
console.log(findPairs([1, 2, 4, 4, 3, 3, 0, 9, 2, 3], 3)); // 2
console.log(findPairs([1, 1, 1, 1], 0)); // 1
console.log(findPairs([-1, -1, 1, 1], 0)); // 2
console.log(findPairs([6, 2, 9, 3, 9, 6, 7, 7, 6, 4], 3)) // 3
console.log(findPairs([6, 3, 5, 7, 2, 3, 3, 8, 2, 4], 2)); // 5