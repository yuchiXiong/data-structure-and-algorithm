/**
 * @param {number[]} edges
 * @return {number}
 */
var edgeScore = function (edges) {
  const result = edges.reduce((obj, cur, index) => {
    obj[cur] = (obj[cur] || 0) + index;
    return obj;
  }, {});

  const max = Math.max(...Object.values(result));

  return Number(Object.keys(result).map(i => [i, result[i]]).find(i => i[1] === max)[0])
};