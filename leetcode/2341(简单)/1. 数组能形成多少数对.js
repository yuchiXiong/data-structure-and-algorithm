/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function (nums) {
  const hash = nums.reduce((obj, cur) => {
    obj[cur] = obj[cur] ? obj[cur] + 1 : 1;
    return obj;
  }, {});

  let result = 0;
  Object.values(hash).forEach(i => {
    if (i >= 2) result += Math.floor(i / 2);
  });

  return [result, nums.length - result * 2];
};