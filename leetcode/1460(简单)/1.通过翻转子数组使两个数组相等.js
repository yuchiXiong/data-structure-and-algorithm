/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function (target, arr) {
  return target.sort().join() === arr.sort().join();
};

console.log(canBeEqual([1, 2, 3, 4], [2, 4, 1, 3])); // true
console.log(canBeEqual([7], [7])); // true
console.log(canBeEqual([1, 12], [12, 1])); // true
console.log(canBeEqual([3, 7, 9], [3, 7, 11])); // false
console.log(canBeEqual([1, 1, 1, 1, 1], [1, 1, 1, 1, 1])); // true
