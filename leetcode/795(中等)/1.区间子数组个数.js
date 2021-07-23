/**
 * @param {number[]} nums
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var numSubarrayBoundedMax = function (nums, left, right) {
  console.log(nums);
  let before = [];
  let result = 0;
  nums.forEach((item) => {
    before.push(item);
    const currentMax = Math.max(...before);
    if (before.length > 1 && currentMax >= left && currentMax <= right) {
      const arr = Object.assign([...before]);
      arr.shift();
      result += numSubarrayBoundedMax(arr, left, right);
    }
    if (currentMax >= left && currentMax <= right) {
      result += 1;
    } else {
      before = [];
    }
  });
  return result;
};

// const nums = [2, 1, 4, 3];
// const left = 2;
// const right = 3;

// console.log(numSubarrayBoundedMax(nums, left, right)); // 4

const nums = [2, 9, 2, 5, 6];
const left = 2;
const right = 8;

console.log(numSubarrayBoundedMax(nums, left, right)); // 7 [ [2], [2], [2,5], [2,5,6], [5], [5,6], [6]]
