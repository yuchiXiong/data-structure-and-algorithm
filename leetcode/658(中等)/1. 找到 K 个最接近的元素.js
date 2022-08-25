/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function (arr, k, x) {
  return arr.sort((a, b) => Math.abs(a - x) - Math.abs(b - x)).slice(0, k).sort((a, b) => a - b);
};

console.log(findClosestElements([1, 2, 3, 4, 5], 4, 3)); // [1,2,3,4]
console.log(findClosestElements([1, 2, 3, 4, 5], 4, -1)); // [1,2,3,4]
console.log(findClosestElements([-3, -2, -1, 0, 1, 2, 3, 4, 5], 4, -1)); // [1,2,3,4]
