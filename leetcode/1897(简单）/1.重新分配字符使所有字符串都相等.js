/**
 * @param {string[]} words
 * @return {boolean}
 * 
 * 1. 第一次没有考虑到样板字母出现的频率应该是总长度的整数倍。
 * 2. 第二次没有考虑到数组长度为1的情况。
 * 3. 第三次没有考虑到数组长度是不会变的。
 */
var makeEqual = function (words) {
  var maps = {};
  words.map((item) => {
    item.split("").map((item) => (maps[item] = (maps[item] || 0) + 1));
  });
  return Object.values(maps).every((item) => item % words.length === 0);
};

console.log(makeEqual(["abc", "aabc", "bc"])); // true
console.log(makeEqual(["a", "b"])); // false
console.log(makeEqual(["abbab"])); // true
console.log(
  makeEqual([
    "caaaaa",
    "aaaaaaaaa",
    "a",
    "bbb",
    "bbbbbbbbb",
    "bbb",
    "cc",
    "cccccccccccc",
    "ccccccc",
    "ccccccc",
    "cc",
    "cccc",
    "c",
    "cccccccc",
    "c",
  ])
);
