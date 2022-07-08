/**
 * @param {number[]} position
 * @return {number}
 */
var minCostToMoveChips = function (position) {
  if (position.length === 1) return 0;

  let a1 = 0, a2 = 0;
  position.forEach((item) => {
    item % 2 === 0 ? a1 += 1 : a2 += 1;
  });

  return Math.min(a1, a2);
}