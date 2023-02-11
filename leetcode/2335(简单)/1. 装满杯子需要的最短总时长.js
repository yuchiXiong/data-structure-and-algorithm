/**
 * @param {number[]} amount
 * @return {number}
 */
var fillCups = function (amount) {
  let result = 0;

  while (amount[0] + amount[1] + amount[2] !== 0) {
    result += 1;
    const zeroCount = amount.filter(i => i === 0).length;

    if (zeroCount === 0) {
      const min = Math.min(...amount);
      const index = amount.findIndex(i => i === min);
      amount = amount.map((num, i) => index === i ? num : num - 1);
    } else if (zeroCount === 1) {
      amount = amount.map(i => i === 0 ? 0 : i - 1);
    } else if (zeroCount === 2) {
      amount = amount.map(i => i === 0 ? 0 : i - 1);
    }
  }

  return result;
};