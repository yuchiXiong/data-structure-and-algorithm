/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function (boxTypes, truckSize) {
  const sorted = boxTypes.sort((a, b) => b[1] - a[1]);
  let result = 0;

  for (let i = 0; i < sorted.length; i++) {
    result += sorted[i][1] * Math.min(sorted[i][0], truckSize);
    truckSize -= sorted[i][0];
    if (truckSize <= 0) return result;
  }

  return result;
};