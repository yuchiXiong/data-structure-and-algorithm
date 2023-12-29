/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function (prices, money) {
  prices.sort((a, b) => a - b);
  const [first, second, ...rest] = prices;
  if (first + second <= money) {
    return money - first - second
  } else {
    return money;
  }
};