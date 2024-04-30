/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n, elements = [1, 2, 3, 4, 5, 6, 7, 8, 9]) {

  return [...new Set(combinationSum(n, elements).filter(i => i.length === k).map(i => i.sort((a, b) => a - b).join('|')))].map(i => i.split('|')).filter(i => {
      return i.reduce((sum, cur) => sum + Number(cur), 0) === n;
  })
};

const combinationSum = function (target, elements) {
  const result = [];
  for (let i = 0; i < elements.length; i++) {
      const current = elements[i];
      if (current < target) {
          const _result = combinationSum(target - current, elements.filter(i => i !== current));
          _result.forEach(item => {
              result.push([current, ...item])
          })
      } else if (current === target) {
          result.push([current])
      } else {
          result.push([]);
      }
  }

  return result
}