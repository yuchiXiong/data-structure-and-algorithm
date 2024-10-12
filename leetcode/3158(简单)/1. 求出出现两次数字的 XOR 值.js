/**
 * @param {number[]} nums
 * @return {number}
 */
var duplicateNumbersXOR = function(nums) {
  const countMap = nums.reduce((obj, cur) => {
      obj[cur] = obj[cur] ? (obj[cur] + 1) : 1;
      return obj;
  }, {});
  
  const twiceKeys = Object
      .keys(countMap)
      .filter(key => countMap[key] === 2)
      .reduce((result, cur) => Number(cur) ^ result, 0);
  
  return twiceKeys;
};