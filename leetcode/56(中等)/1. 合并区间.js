/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  const result = [];
  let merged = false
  for (let i = 0; i < intervals.length; i++) {
    const [start, end] = intervals[i];
    const target = result.find(i => (start <= i[1] && start >= i[0]) || (end <= i[1] && end >= i[0]) || (i[1] <= end && i[1] >= start) || (i[0] <= end && i[0] >= start));

    if (target) {
      merged = true;
      target[0] = Math.min(target[0], start);
      target[1] = Math.max(target[1], end);
    } else {
      result.push(intervals[i]);
    }
  }
  if (merged) return merge(result);
  else return result;
};

console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]])); // [[1,6],[8,10],[15,18]]
console.log(merge([[1, 4], [4, 5]])); // [[1,5]]
console.log(merge([[1, 4], [0, 5]])); // [[0,5]]
console.log(merge([[2, 3], [4, 5], [6, 7], [8, 9], [1, 10]])); // [[1,10]]