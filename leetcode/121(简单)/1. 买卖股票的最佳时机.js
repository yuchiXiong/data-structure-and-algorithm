/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let min = prices[0], max = prices[0], result = 0;
  for (let i = 0; i < prices.length; i++) {
    if (min > prices[i]) {
      min = prices[i];
      max = prices[i];
    }

    if (max < prices[i]) max = prices[i];

    result = (max - min > result) ? (max - min) : result;
  }

  return result;
};