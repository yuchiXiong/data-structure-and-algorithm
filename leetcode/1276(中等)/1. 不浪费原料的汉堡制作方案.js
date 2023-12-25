/**
 * @param {number} tomatoSlices
 * @param {number} cheeseSlices
 * @return {number[]}
 */
var numOfBurgers = function (tomatoSlices, cheeseSlices) {
  const x = (tomatoSlices - 2 * cheeseSlices) / 2;
  if (Math.floor(x) === x && x >= 0 && cheeseSlices - x >= 0) return [x, cheeseSlices - x];
  else {
    return [];
  }
};