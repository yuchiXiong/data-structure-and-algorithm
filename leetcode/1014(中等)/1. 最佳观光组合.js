/**
 * @param {number[]} values
 * @return {number}
 */
var maxScoreSightseeingPair = function (values) {
  let preMax = values[0];
  let result = 0;
  for (let i = 1; i < values.length; i += 1) {
    result = Math.max(result, preMax + values[i] - i);
    preMax = Math.max(preMax, i + values[i]);
  }

  return result
};

console.log(maxScoreSightseeingPair([8, 1, 5, 2, 6])) // 11
console.log(maxScoreSightseeingPair([1, 2])) // 2