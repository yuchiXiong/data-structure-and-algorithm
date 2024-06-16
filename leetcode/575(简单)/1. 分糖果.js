/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
  return Math.min(new Set(candyType).size, candyType.length / 2);
};