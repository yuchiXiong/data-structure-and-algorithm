/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  if (num1 === '0') return num2;
  if (num2 === '0') return num1;

  let ans = '';
  let bit = 0;
  const n1L = num1.length > num2.length;
  for (let i = Math.max(num1.length, num2.length) - 1; i >= 0; i--) {
    const result = Number(num1[n1L ? i : i + num1.length - num2.length] || '0') +
      Number(num2[n1L ? i - num1.length + num2.length : i] || '0') + bit;
    ans = (result % 10).toString() + ans;
    bit = Math.floor(result / 10);
  }
  if (bit !== 0) ans = bit + ans;
  return ans;
};

console.log(addStrings('11', '123')); // '134'
console.log(addStrings('456', '77')); // '533'
console.log(addStrings('0', '0')); // '0'