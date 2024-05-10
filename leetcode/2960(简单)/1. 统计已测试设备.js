/**
 * @param {number[]} batteryPercentages
 * @return {number}
 */
var countTestedDevices = function(batteryPercentages) {
  let result = 0;

  for (let i = 0; i < batteryPercentages.length; i++) {
      if (batteryPercentages[i] > 0) {
          result += 1;
          for (let j = i + 1; j < batteryPercentages.length; j++) {
              batteryPercentages[j] = Math.max(0, batteryPercentages[j] - 1)
          }
      }
  }

  return result;
};