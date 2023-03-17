/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function (nums, queries) {
  nums.sort((a, b) => a - b);
  const prefixSum = nums.reduce((arr, cur, index) => {
    if (index >= 1) arr.push(arr[index - 1] + cur);

    return arr;
  }, [nums[0]])

  return queries.map(query => {
    const result = prefixSum.findIndex(i => i > query)
    return result === -1 ? prefixSum.length : result;
  });
};