/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function (arr) {
  let len = 0;
  const hash = [...arr].sort((a, b) => a - b).reduce((r, c) => {
    r[c] = r[c] ? r[c] : ++len;
    return r;
  }, {});

  return arr.map(i => hash[i]);
};