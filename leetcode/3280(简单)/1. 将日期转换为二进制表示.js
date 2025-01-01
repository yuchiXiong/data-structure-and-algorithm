/**
 * @param {string} date
 * @return {string}
 */
var convertDateToBinary = function(date) {
  return date.split('-').map(i => toHex(Number(i))).join('-')
};

const toHex = (numStr) => {
  let result = '';
  let cur = numStr;

  while (cur) {
      result = cur % 2 + result;
      cur = Math.floor(cur / 2)
  }

  return result;
}