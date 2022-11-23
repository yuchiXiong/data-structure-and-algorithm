/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  let cur = 0, result = 0;
  for (let i = 0; i < gain.length; i++) {
    cur += gain[i];
    result = Math.max(result, cur);
  }

  return result;
};