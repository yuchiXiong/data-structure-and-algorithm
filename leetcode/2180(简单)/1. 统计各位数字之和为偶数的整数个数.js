/**
 * @param {number} num
 * @return {number}
 */
var countEven = function (num) {
  let result = 0;
  for (let i = 1; i <= num; i += 1) {
    if (i.toString().split('').reduce((sum, cur) => sum + Number(cur), 0) % 2 === 0) {
      result += 1;
    }
  }

  return result;
};