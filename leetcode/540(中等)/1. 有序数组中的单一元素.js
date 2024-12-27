/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    return nums.reduce((result, cur) => result ^ cur, 0)
};