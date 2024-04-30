/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {

  const result = [];
  for (let i = 0; i < candidates.length; i++) {
      const current = candidates[i];
      if (target > current) {
          combinationSum(candidates, target - current).forEach(item => {
              result.push([current, ...item])
          })
      } else if (target === current) {
          result.push([current]);
      }
  }

  return [...new Set(result.map(i => i.sort((a, b) => a - b).join("|")))].map(i => i.split("|"));
};