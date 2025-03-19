/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function (nums) {
  const countMap = {};
  nums.forEach(num => {
    const count = countMap[num] || 0;
    countMap[num] = count + 1;
  });

  const result = [];
  while (Object.keys(countMap).length !== 0) {
    const subResult = Object.keys(countMap).map(Number);
    subResult.forEach(key => {
      countMap[key] = countMap[key] - 1;
      if (countMap[key] === 0) {
        delete countMap[key]
      }
    })
    result.push(subResult)
  }

  return result;
};