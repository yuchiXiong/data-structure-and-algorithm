/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function (operations) {
  const addCount = operations.filter(cur => cur.includes('++')).length;
  return addCount - (operations.length - addCount);
};