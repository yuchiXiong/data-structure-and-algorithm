// @ts-check
/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
  const hash = {};
  for (let i = 0; i < s.length; i++) {
    if (hash[s[i]]) continue;
    hash[s[i]] = [i, s.lastIndexOf(s[i])];
  }

  const sections = Object.values(hash).sort((a, b) => a[0] - b[0]);

  let index = 0;
  const result = [];
  for (let i = 0; i < sections.length; i++) {
    if (result[index] === undefined) {
      result[index] = sections[i];
    } else {
      if ((sections[i][0] >= result[index][0]) && (sections[i][0] <= result[index][1])) {
        result[index][1] = Math.max(sections[i][1], result[index][1]);
      } else if (result[index][1] < sections[i][0]) {
        index++;
        i--;
        continue;
      }
    }
  }

  return result.map(i => i[1] - i[0] + 1);
};

// 0-8 9-15 16-23
console.log(partitionLabels('ababcbacadefegdehijhklij')); // [9,7,8]