/**
 * @param {number} n
 * @return {number}
 */
var rotatedDigits = function (n) {
  const failList = ['3', '4', '7'];
  const goodList = ['2', '5', '6', '9'];
  let result = 0;
  for (let i = 1; i <= n; i++) {
    if (i === 7 || i % 10 === 7 || i === 4 || i % 10 === 4 || i === 3 || i % 10 === 3) continue;
    isGood(i.toString(), failList, goodList) && result++;
  }
  return result;
};

/**
* @param {string} str
* @return {boolean}
*/
const isGood = (str, failList, goodList) => {
  let ans = false;
  for (let i = 0; i < str.length; i++) {
    if (failList.includes(str[i])) return false;
    if (goodList.includes(str[i])) ans = true;
  }
  return ans;
};
console.log(rotatedDigits(30)); // 15
console.log(rotatedDigits(50)); // 16
console.log(rotatedDigits(100)); // 40
console.log(rotatedDigits(857)); // 247