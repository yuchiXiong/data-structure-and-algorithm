/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {
  const hash = {};
  nums.forEach(i => hash[i] = hash[i] ? hash[i] + 1 : 1);
  return Object.keys(hash).sort((key1, key2) => {
    if (hash[key1] - hash[key2] === 0) {
      return Number(key2) - Number(key1);
    } else {
      return hash[key1] - hash[key2];
    }
  }).map(key => (new Array(hash[key])).fill(key)).flat()
};