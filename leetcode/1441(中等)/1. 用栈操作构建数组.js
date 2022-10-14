/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function (target, n) {
  const result = [];
  let index = 0;
  for (let i = 1; i <= n; i++) {
    if (index === target.length) break;

    if (i === target[index]) {
      index++;
      result.push("Push");
    } else {
      result.push("Push");
      result.push("Pop");
    }
  }

  return result;
};