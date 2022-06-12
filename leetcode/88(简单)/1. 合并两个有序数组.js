/**
 * ! 这是一个错误的实现，没有按照题目要求的进行原地归并，原地归并见1. 合并两个有序数组.cpp.
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let _res = [], i = 0, j = 0;

  while (i < m || j < n) {
    if (i >= m) {
      _res.push(nums2[j++]);
      continue;
    } else if (j >= n) {
      _res.push(nums1[i++]);
      continue;
    }

    if (nums1[i] < nums2[j]) {
      _res.push(nums1[i]);
      i++;
    } else {
      _res.push(nums2[j]);
      j++;
    }
  }

  return _res;
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
console.log(merge([1], 1, [], 0));
console.log(merge([], 0, [1], 1));