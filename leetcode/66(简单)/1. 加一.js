/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let bit = 1;
  for (let i = digits.length - 1; i >= 0; i--) {
    const current = digits[i];
    digits[i] = (current + bit) % 10;

    if (current + bit >= 10) {
      bit = 1;
    } else {
      bit = 0;
    }
  }
  bit === 1 && digits.unshift(1);
  return digits;
};  