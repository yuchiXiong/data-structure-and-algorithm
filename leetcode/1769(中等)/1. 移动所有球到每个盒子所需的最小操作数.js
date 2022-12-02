/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function (boxes) {
  const arr = boxes.split('');
  return arr.map((_, index) => {
    const left = arr.slice(0, index).reduce((sum, cur, lindex) => sum + (cur === '1' ? index - lindex : 0), 0);
    const right = arr.slice(index + 1).reduce((sum, cur, rindex) => sum + (cur === '1' ? rindex + 1 : 0), 0);
    return left + right;
  })
};