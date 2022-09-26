/**
 * @param {number[]} nums
 * @return {number[]}
 */
var missingTwo = function (nums) {
  const map = arrayMap(Math.max(...nums));

  for (let i = 0; i < nums.length; i++) {
    delete map[nums[i]];
  }

  const ans = Object.keys(map).map(Number);

  if (ans.length === 0) {
    ans.push(Math.max(...nums) + 1);
    ans.push(Math.max(...nums) + 2);
  } else if (ans.length === 1) {
    ans.push(Math.max(...nums) + 1);
  }

  return ans;
};

const arrayMap = (n) => new Array(n).fill('').reduce((obj, cur, i) => {
  obj[i + 1] = '';
  return obj;
}, {});

console.log(missingTwo([1])); // [2, 3]
console.log(missingTwo([2, 3])); // [1, 4]
console.log(missingTwo([2])); // [1, 3]
console.log(missingTwo([1, 3, 4, 5, 6, 7, 8, 10])); // [9, 2]