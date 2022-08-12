/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function (groupSizes) {
  const ans = {};

  for (let i = 0; i < groupSizes.length; i++) {
    if (!ans[groupSizes[i]]) {
      ans[groupSizes[i]] = {
        count: 0,
        ans: []
      };
    }

    const current = ans[groupSizes[i]];
    current.count++;
    const index = Math.floor((current.count - 1) / groupSizes[i]);
    current.ans[index] = current.ans[index] || [];
    current.ans[index].push(i);
  }

  return Object.values(ans).map(({ ans }) => ans).flat();
};

console.log(groupThePeople([3, 3, 3, 3, 3, 1, 3])); // [[5],[0,1,2],[3,4,6]]
console.log(groupThePeople([2, 1, 3, 3, 3, 2])); // [[1],[0,5],[2,3,4]]