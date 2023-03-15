/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var maximalNetworkRank = function (n, roads) {
  let max = -1;
  const hash = roads.reduce((obj, cur) => {
    obj[cur[0]] = obj[cur[0]] ? obj[cur[0]].concat(cur[1]) : [cur[1]];
    obj[cur[1]] = obj[cur[1]] ? obj[cur[1]].concat(cur[0]) : [cur[0]];

    return obj;
  }, {});

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === j) continue;

      const countI = getRoadCountToCity(i, hash);
      const countJ = getRoadCountToCity(j, hash);

      const result = countI + countJ - (hash[i]?.includes(j) ? 1 : 0);

      max = Math.max(max, result);
    }
  }

  return max;
};

const getRoadCountToCity = (city, hash) => {
  return hash[city]?.length || 0;
}