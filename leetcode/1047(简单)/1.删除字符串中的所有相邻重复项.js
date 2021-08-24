/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
  const result = [];
  for (let i = 0; i < s.length; i += 1) {
    if (result[result.length - 1] !== s[i]) {
      result.push(s[i]);
    } else {
      result.pop();
    }
  }
  return result.join('');
};

console.log(removeDuplicates('abbaca')); // ca
