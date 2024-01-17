/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function (words) {
  const map = words.reduce((obj, cur, index) => {
    obj[cur] = index;
    return obj;
  }, {});

  let result = 0;
  for (let i = 0; i < words.length; i++) {
    const cur = words[i];
    const target = cur.split('').reverse().join('');
    if (![i, undefined].includes(map[target])) result += 1;
  }

  return result / 2;
};