/**
 * @param {string} word
 * @return {number}
 */
var numDifferentIntegers = function (word) {
  return [...new Set(word.replace(/[a-z]/g, ' ').split(' ').filter(i => i !== '').map(BigInt))].length;
};

console.log(numDifferentIntegers("a123bc34d8ef34"));
console.log(numDifferentIntegers("leet1234code234"));
console.log(numDifferentIntegers("a1b01c001"));
