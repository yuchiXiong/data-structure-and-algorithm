/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function (nums, diff) {
  const hash = nums.reduce((obj, cur) => {
    obj[cur] = true;
    return obj;
  }, {});

  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i] + diff] && hash[nums[i] + diff + diff]) result++;
  }

  return result;
};