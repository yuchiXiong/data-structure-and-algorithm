/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isFlipedString = function (s1, s2) {
  if (s1.length !== s2.length) return false;

  if (s1 === s2) return true;

  for (let i = 0; i < s1.length; i++) {
    const attr = s1.substring(i);
    if (attr + s1 === s2 + attr) return true;
  }

  return false;
};

console.log(isFlipedString("waterbottle", "erbottlewat")); // true
console.log(isFlipedString("aa", "aba")); // false