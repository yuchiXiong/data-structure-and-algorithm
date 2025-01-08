/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function (num) {
  const dir = new Array(10).fill('').map((_, index) => index.toString().repeat(3));

  for (let i = dir.length - 1; i >= 0; i -= 1) {
    if (num.includes(dir[i])) return dir[i]
  }

  return ''
};