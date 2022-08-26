/**
 * @param {number[]} capacity
 * @param {number[]} rocks
 * @param {number} additionalRocks
 * @return {number}
 */
var maximumBags = function (capacity, rocks, additionalRocks) {
  let ans = 0;
  capacity.map((c, i) => c - rocks[i]).sort((a, b) => a - b).reduce((sum, i) => {
    if (sum + i <= additionalRocks) ans++;

    return sum + i;
  }, 0);

  return ans;
};

console.log(maximumBags([2, 3, 4, 5], [1, 2, 4, 4], 2)); // 3
console.log(maximumBags([10, 2, 2], [2, 2, 0], 100)); // 3