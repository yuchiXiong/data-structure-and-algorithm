/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
  const hash = {};
  const ans = [];
  for (let i = 0; i <= s.length - 10; i++) {
    const subStr = s.substr(i, 10);
    hash[subStr] = hash[subStr] ? hash[subStr] + 1 : 1;
    if (hash[subStr] === 2) ans.push(subStr);
  }

  return ans;
};