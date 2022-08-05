/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function (words) {
  const ans = [];
  const allStr = words.join(',');
  for (let i = 0; i < words.length; i++) {
    allStr.match(new RegExp(words[i], 'g')).length >= 2 && ans.push(words[i]);
  }

  return ans;
};

console.log(stringMatching(["mass", "as", "hero", "superhero"])); // ["as","hero"]
console.log(stringMatching(["leetcode", "et", "code"])); // ["et","code"]
console.log(stringMatching(["blue", "green", "bu"])); // []