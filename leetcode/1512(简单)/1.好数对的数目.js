/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  const maps = {};
  let counter = 0;
  nums.map((item) => {
    if (maps[item] !== undefined) {
      counter += maps[item];
      maps[item] += 1;
    } else {
      maps[item] = 1;
    }
  });

  return counter;
};

console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3])); // 4
console.log(numIdenticalPairs([1, 1, 1, 1])); // 6
console.log(numIdenticalPairs([1, 2, 3])); // 0
