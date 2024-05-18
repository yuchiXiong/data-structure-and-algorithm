/**
 * @param {number[]} milestones
 * @return {number}
 */
var numberOfWeeks = function (milestones) {
  const sum = milestones.reduce((result, cur) => result + cur, 0);
  const max = Math.max(...milestones);

  if (max > sum - max) return 2 * (sum - max) + 1

  return sum;
};