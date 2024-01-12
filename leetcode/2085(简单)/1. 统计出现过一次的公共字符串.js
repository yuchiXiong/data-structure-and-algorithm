/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function (words1, words2) {
  const mapWord1 = words1.reduce((obj, cur) => {
    obj[cur] = obj[cur] ? obj[cur] + 1 : 1;
    return obj;
  }, {});

  const mapWord2 = words2.reduce((obj, cur) => {
    obj[cur] = obj[cur] ? obj[cur] + 1 : 1;
    return obj;
  }, {});

  return [...new Set(words1.concat(words2))].filter(word => {
    return mapWord1[word] === 1 && mapWord2[word] === 1
  }).length;
};