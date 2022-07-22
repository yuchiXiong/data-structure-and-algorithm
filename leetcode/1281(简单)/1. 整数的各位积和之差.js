/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
  const res = n.toString().split('').map(i => Number(i)).reduce((res, i) => [res[0] * i, res[1] + i], [1, 0]);
  return res[0] - res[1];
};