/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function (s) {
  return s.replace(/[a-z]/g, ' ').split(' ').reduce((hash, cur) => {
    if (hash.pre === null) {
      return { result: true, pre: cur };
    } else {
      if (cur === '') return hash;
      else {
        return {
          result: hash.result && (Number(hash.pre) < Number(cur)),
          pre: cur
        }
      }
    }
  }, { result: true, pre: null }).result
};