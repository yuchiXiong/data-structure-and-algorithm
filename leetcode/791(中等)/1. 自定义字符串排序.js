/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function (order, s) {
  const hash = order.split('').reduce((obj, cur, index) => {
    obj[cur] = index;
    return obj;
  }, {});
  return s.split('').sort((a, b) => (hash[a] || -1) - (hash[b] || -1)).join('');
};