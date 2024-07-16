/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var findIntersectionValues = function(nums1, nums2) {
  return [
      nums1.filter(i => nums2.includes(i)).length,
      nums2.filter(i => nums1.includes(i)).length,
  ]
};