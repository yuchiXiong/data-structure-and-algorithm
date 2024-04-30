/**
 * @param {number[]} changed
 * @return {number[]}
 */
var findOriginalArray = function (changed) {
  const sorted = [...changed].sort((a, b) => a - b);

  const map = sorted.reduce((obj, cur) => {
      obj[cur] = obj[cur] ? obj[cur] + 1 : 1;
      return obj;
  }, {});


  const result = []
  for (let i = 0; i < sorted.length; i++) {
      const current = sorted[i];

      if (map[current] <= 0) continue;

      const count = map[current * 2] || 0;
      const needCount = current === 0 ? 2 : 1
      if (count >= needCount) {
          map[current * 2] -= 1;
          map[current] -= 1;
          result.push(current);
      }
  }

  return Object.values(map).reduce((sum, cur) => sum + cur, 0) === 0 ? result : []

};