/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  const hash = {};
  for (let i = 0; i < numbers.length; i++) {
    if (hash[target - numbers[i]] !== undefined) return [i + 1, hash[target - numbers[i]] + 1].sort((a, b) => a - b);
    else hash[numbers[i]] = i;
  }
};