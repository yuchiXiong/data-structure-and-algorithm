/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumPrimeDifference = function (nums) {
  const r = nums.map(isPrime)
  return r.lastIndexOf(true) - r.indexOf(true)
};

const isPrime = (num) => {
  if (num <= 3) {
    return num > 1
  } else {
    const sq = Math.sqrt(num)
    for (let i = 2; i <= sq; i++) {
      if (num % i === 0) {
        return false
      }
    }
    return true
  }
}
