/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
  const sortedArr = [...heights].sort((a, b) => a - b);
  let result = 0;

  for (let i = 0; i < sortedArr.length; i++) {
    if (heights[i] !== sortedArr[i]) result++;
  }

  return result;
};