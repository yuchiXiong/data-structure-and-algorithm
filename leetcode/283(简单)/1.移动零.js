/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 *
 * 我的解法，第一层循环找到0元素，第二层循环找到非0元素，交换它们的位置
 */
// var moveZeroes = function (nums) {
//   for (let i = 0; i < nums.length; i += 1) {
//     if (nums[i] === 0) {
//       for (let j = i; j < nums.length; j += 1) {
//         if (nums[j] !== 0) {
//           let temp = nums[j];
//           nums[j] = nums[i];
//           nums[i] = temp;
//           break;
//         }
//       }
//     }
//   }
//   return nums;
// };
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 *
 * 第二种解法：把非零元素往前移动
 * 其中 zeroIndex 实际是一个用于标识当前可用位置的指针
 */
var moveZeroes = function (nums) {
  let zeroIndex = -1;
  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] === 0 && zeroIndex == -1) {
      zeroIndex = i;
    }
    if (nums[i] !== 0 && zeroIndex !== -1 ) {
      [nums[zeroIndex], nums[i]] = [nums[i], nums[zeroIndex]];
      zeroIndex += 1;
    }
  }
  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
