/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function (nums) {
  const odd = nums.filter(i => i % 2 === 0);

  if (odd.length === 0) return -1;

  const hash = odd.reduce((obj, cur) => {
    obj[cur] = obj[cur] ? obj[cur] + 1 : 1;
    return obj;
  }, {});

  const maxCount = Math.max(...Object.values(hash));

  return Math.min(...Object.keys(hash).filter(key => hash[key] === maxCount));
};