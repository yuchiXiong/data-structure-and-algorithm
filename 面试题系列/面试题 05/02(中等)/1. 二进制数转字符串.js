/**
 * @param {number} num
 * @return {string}
 */
var printBin = function (num) {
  let result = '0.';
  while (result.length <= 32 && num > 0) {
    num *= 2;

    if (num >= 1) {
      result += '1';
      num -= 1;
    } else result += '0';

  }

  return (num !== 0 && num !== 1) ? 'ERROR' : result;
};