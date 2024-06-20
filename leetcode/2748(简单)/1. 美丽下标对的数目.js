/**
 * @param {number[]} nums
 * @return {number}
 */
var countBeautifulPairs = function (nums) {
  return nums.map((num, index) => {
      return nums.slice(index + 1).filter(i => {
          return gcd(Number(num.toString()[0]), i % 10) === 1
      }).length
  }).reduce((result, cur) => {
      return result + cur
  }, 0)
};

const gcd = function (a, b) {
  if (!b) {
      return a;
  }

  return gcd(b, a % b);
}