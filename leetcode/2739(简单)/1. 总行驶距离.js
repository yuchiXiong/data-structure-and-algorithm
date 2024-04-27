/**
 * @param {number} mainTank
 * @param {number} additionalTank
 * @return {number}
 */
var distanceTraveled = function(mainTank, additionalTank) {
  let result = 0;
  let used = 0;
  while (mainTank > 0) {
      result += 10;
      mainTank -= 1;
      used += 1;
      if (used === 5 && additionalTank > 0) {
          mainTank += 1;
          additionalTank -= 1;
          used = 0
      }
  }

  return result
};