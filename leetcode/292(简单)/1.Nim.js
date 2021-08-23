/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function (n) {
  return n % 4 !== 0;
};

console.log(canWinNim(4)); // false
console.log(canWinNim(1)); // true
console.log(canWinNim(2)); // true
