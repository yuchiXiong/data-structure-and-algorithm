/**
 * @param {number[]} nums
 * @param {number} limit
 * @param {number} goal
 * @return {number}
 */
var minElements = function (nums, limit, goal) {
  const total = nums.reduce((sum, cur) => sum + cur, 0);

  if (total === goal) {
    return 0;
  } else if (total < goal) {
    if (total + limit >= goal) return 1;
    else return Math.ceil(Math.abs(goal - total) / limit);
  } else {
    if (total - limit <= goal) return 1;
    else return Math.ceil(Math.abs(total - goal) / limit);
  }
};