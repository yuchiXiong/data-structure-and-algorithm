/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var constructArray = function (n, k) {
  const ans = [1];
  let left = 1, right = k + 1, count = 0;
  while (left < right) {
    if (count % 2 === 0) {
      ans.push(right--);
    } else {
      ans.push(++left);
    }
    count++;
  }

  return ans.concat(new Array(n - k - 1).fill('').map((_, i) => i + k + 2));
};

console.log(constructArray(3, 1)); // [1, 2, 3]
console.log(constructArray(3, 2)); // [1, 3, 2]
console.log(constructArray(5, 4)); // [1, 5, 2, 4, 3]