/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function(x) {
  const sum = x.toString().split('').reduce((sum, cur) => Number(cur) + sum, 0)

  return x % sum === 0 ? sum : -1
};