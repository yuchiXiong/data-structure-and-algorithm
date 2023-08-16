/**
 * @param {string} word
 * @return {boolean}
 */
var equalFrequency = function (word) {
  const hash = word.split('').reduce((obj, cur) => {
    obj[cur] = obj[cur] ? obj[cur] + 1 : 1;
    return obj;
  }, {});

  const keys = Object.keys(hash);
  for (let i = 0; i < keys.length; i++) {
    const newHash = {
      ...hash,
      [keys[i]]: hash[keys[i]] - 1
    }
    if ([...new Set(Object.values(newHash).filter(i => i !== 0))].length === 1) return true;
  }

  return false;
};