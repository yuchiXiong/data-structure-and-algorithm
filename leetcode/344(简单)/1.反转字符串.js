/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  const len = s.length % 2 === 0 ? s.length / 2 : Math.ceil(s.length / 2);
  for (let i = 0; i < len; i += 1) {
    const item = s[i];
    s[i] = s[s.length - i - 1];
    s[s.length - i - 1] = item;
  }

  return s;
};

console.log(reverseString(["h","e","l","l","o"])) // ["o","l","l","e","h"]
console.log(reverseString(["H","a","n","n","a","h"])) // ["h","a","n","n","a","H"]