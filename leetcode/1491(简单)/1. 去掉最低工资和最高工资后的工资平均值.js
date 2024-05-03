/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary) {
  return salary.sort((a, b) => a - b).filter((item, index, arr) => ![0, arr.length - 1].includes(index)).reduce((sum, cur) => sum + cur, 0) / (salary.length - 2)
};