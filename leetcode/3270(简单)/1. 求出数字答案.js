/**
 * @param {number} num1
 * @param {number} num2
 * @param {number} num3
 * @return {number}
 */
var generateKey = function(num1, num2, num3) {
  const fixedNumber1 = numberFixed(num1);
  const fixedNumber2 = numberFixed(num2);
  const fixedNumber3 = numberFixed(num3);

  return Number([
      Math.min(fixedNumber1[0], fixedNumber2[0], fixedNumber3[0]),
      Math.min(fixedNumber1[1], fixedNumber2[1], fixedNumber3[1]),
      Math.min(fixedNumber1[2], fixedNumber2[2], fixedNumber3[2]),
      Math.min(fixedNumber1[3], fixedNumber2[3], fixedNumber3[3]),
  ].join(''))
};

const numberFixed = (num) => {
  const len = num.toString().length;
  if (len < 4) {
      return '0'.repeat(4 - len) + num.toString();
  } else {
      return num.toString();
  }
}