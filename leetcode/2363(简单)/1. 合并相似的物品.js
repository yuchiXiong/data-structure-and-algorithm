/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
var mergeSimilarItems = function (items1, items2) {
  const result = items1.reduce((obj, cur) => {
    obj[cur[0]] = cur[1];
    return obj;
  }, {});

  items2.forEach(i2 => {
    const value = i2[0];
    if (result[value] !== undefined) {
      result[value] += i2[1];
    } else {
      result[value] = i2[1];
    }
  });

  return Object.keys(result).map(key => [key, result[key]]).sort((a, b) => a[0] - b[0]);
};