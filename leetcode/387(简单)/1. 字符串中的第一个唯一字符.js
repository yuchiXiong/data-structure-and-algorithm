/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const hash = {};

  for (let i = 0; i < s.length; i++) {
    hash[s[i]] = hash[s[i]] ? hash[s[i]] + 1 : 1;
  }

  for (let i = 0; i < s.length; i++) {
    if (hash[s[i]] === 1) return i;
  }

  return -1;
};

console.log(firstUniqChar("leetcode")); // 0
console.log(firstUniqChar("loveleetcode")); // 2
console.log(firstUniqChar("aabb")); // -1