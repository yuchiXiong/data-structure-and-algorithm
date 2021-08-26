/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var CheckPermutation = function (s1, s2) {
  return s1.split('').sort().join('') === s2.split('').sort().join('');
};

console.log(CheckPermutation('abc', 'bca'));
console.log(CheckPermutation('abc', 'bad'));
