/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
  return arr2.map(i => arr1.filter(e => e === i)).flat().concat(arr1.filter(i => !arr2.includes(i)).sort((a, b) => a - b));
};