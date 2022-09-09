// @ts-check
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const hash = {};
  for (let i = 0; i < strs.length; i++) {
    const key = strs[i].split('').sort();
    hash[key] === undefined && (hash[key] = []);
    hash[key].push(strs[i]);
  }
  return Object.keys(hash).map(key => hash[key]);
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])); // [["bat"],["nat","tan"],["ate","eat","tea"]]
console.log(groupAnagrams([""])); // [[""]]
console.log(groupAnagrams(["a"])); // [["a"]]