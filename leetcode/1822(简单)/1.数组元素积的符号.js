/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {
  let result = 1;
  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] === 0) {
      result = 0;
      break;
    } else if (nums[i] < 0) {
      result *= -1;
    }
  }
  return result;
};

let nums;

console.log(arraySign([-1, -2, -3, -4, 3, 2, 1])); // 1
console.log(arraySign([1, 5, 0, 2, -3])); // 0
console.log(arraySign([-1, 1, -1, 1, -1])); // -1
