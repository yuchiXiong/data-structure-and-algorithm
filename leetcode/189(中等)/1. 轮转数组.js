/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  // for (let i = 1; i <= k; i++){
  //     nums.unshift(nums[nums.length-1]);
  //     nums.pop();
  // }

  if (k === 0 || k === nums.length) return;
  k %= (nums.length);

  nums.reverse();

  const left = nums.slice(0, k);
  const right = nums.slice(k, nums.length);


  const _nums = [
    ...left.reverse(),
    ...right.reverse(),
  ];

  for (let i = 0; i < nums.length; i++) nums[i] = _nums[i];
};