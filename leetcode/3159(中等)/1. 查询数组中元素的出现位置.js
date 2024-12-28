/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @param {number} x
 * @return {number[]}
 */
var occurrencesOfElement = function(nums, queries, x) {
  const result = [];
  nums.forEach((num, index) => {
      if (num === x) {
          result.push(index);
      }
  })

  return queries.map(query => {
      return (result.length < query) ? -1 : result[query - 1]
  })
};