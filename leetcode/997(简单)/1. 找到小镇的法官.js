/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
  const all = new Array(n).fill('').map((_, i) => i + 1);
  const hash = {};
  trust.map(i => hash[i.join('|')] = i);
  for (let i = 1; i <= n; i++) {
    if (trust.filter(t => t[0] === i).length === 0 && all.filter(cur => cur !== i).every(cur => hash[`${cur}|${i}`])) {
      return i;
    }
  }

  return -1;
};