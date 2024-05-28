/**
 * @param {number[]} mountain
 * @return {number[]}
 */
var findPeaks = function(mountain) {
  const result = [];
  for (let i  = 0; i < mountain.length - 1; i++) {
      const prev = mountain[i - 1];
      const next = mountain[i + 1];
      const current = mountain[i];

      if (current > prev && current > next) {
          result.push(i)
      }
  }
  return result;
};