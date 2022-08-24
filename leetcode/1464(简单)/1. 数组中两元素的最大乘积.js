/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    const sorted = nums.map(i => i - 1).sort((a, b) => b - a);
    return sorted[0] * sorted[1];
};
