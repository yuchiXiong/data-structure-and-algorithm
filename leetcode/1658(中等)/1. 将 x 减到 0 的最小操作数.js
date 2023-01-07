/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function (nums, x) {
  const prefixSum = [0];
  for (let i = 0; i < nums.length; i++) {
    const cur = (prefixSum[prefixSum.length - 1] || 0) + nums[i];
    if (cur > x) break;
    prefixSum.push(cur);
  }

  const suffixSumMap = {};
  let prev = 0;
  for (let i = nums.length - 1; i >= 0; i--) {
    prev += nums[i];
    if (prev > x) break;
    suffixSumMap[prev] = nums.length - 1 - i;
  }

  result = Infinity;

  for (let i = 0; i < prefixSum.length; i++) {
    if (prefixSum[i] > x) break;
    if (prefixSum[i] === x) {
      result = Math.min(i, result);
      break;
    };

    if (suffixSumMap[x - prefixSum[i]] !== undefined) {
      const index = suffixSumMap[x - prefixSum[i]];
      if (i + index + 1 <= nums.length) {
        if (i + index < result) {
          result = i + index + 1;
        }
      }
    }
  }

  return result === Infinity ? -1 : result;
};