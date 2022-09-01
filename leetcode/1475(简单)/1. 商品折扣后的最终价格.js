/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function (prices) {
  return prices.map((i, index) => {
    let min = index;
    for (let j = index + 1; j < prices.length; j++) {
      if (prices[j] <= prices[min]) {
        min = j;
        break;
      }
    }
    if (min === index) return i;
    else return i - prices[min];
  });
};