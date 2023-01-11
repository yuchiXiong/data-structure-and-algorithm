/**
 * @param {string} num
 * @return {boolean}
 */
var digitCount = function (num) {
  const hash = num.split('').reduce((hash, cur) => {
    hash[cur] = (hash[cur] || 0) + 1;
    return hash;
  }, {});

  return num.split('').every((char, index) => (hash[index] || 0) === Number(char));
};