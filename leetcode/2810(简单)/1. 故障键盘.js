/**
 * @param {string} s
 * @return {string}
 */
var finalString = function(s) {
  return s.split('').reduce((result, cur) => {
      if (cur === 'i') {
          return result.split('').reverse().join('')
      } else {
          return result + cur;
      }
  });
};