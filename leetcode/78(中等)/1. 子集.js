/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    return new Array(Math.pow(2, nums.length))
      .fill(0)
      .map((_, i) => {
        const binary = fixed(toBinary(i), nums.length, '0');
        return binary
          .split('')
          .map((char, index) => char === '1' ? nums[index] : '')
          .filter(e => e !== '');
      });
};

const toBinary = (num) => {
  let binary = '';
  while (num > 0) {
    binary = (num % 2) + binary;
    num = Math.floor(num / 2);
  }
  return binary;
}

const fixed = (str, len, placeHolder) => {
  if (str.length >= len) return str;
  return placeHolder.repeat(len - str.length) + str;
}