/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  if (num1 === '0' || num2 === '0') return '0';
  let ans = '0';
  for (let i = num2.length - 1; i >= 0; i--) {
    ans = add(ans, smultiply(num1, Number(num2[i])) + '0'.repeat(num2.length - i - 1));
  }

  return ans;
};

/**
 * 
 * @param {string} num1 
 * @param {string} k 
 * @return {string}
 */
var smultiply = (num1, k) => {
  if (k === '0') return '0';
  let bit = 0;
  let ans = '';
  for (let i = num1.length - 1; i >= 0; i--) {
    const result = Number(num1[i]) * k + bit;
    bit = Math.floor(result / 10);
    ans = result % 10 + ans;
  }
  if (bit !== 0) ans = bit + ans;
  return ans;
}

/**
 * 
 * @param {string} num1 
 * @param {string} num2 
 * @return {string}
 */
var add = (num1, num2) => {
  if (num1 === '0') return num2;
  if (num2 === '0') return num1;

  let ans = '';
  let bit = 0;
  const n1L = num1.length > num2.length;
  for (let i = Math.max(num1.length, num2.length) - 1; i >= 0; i--) {
    const result = Number(num1[n1L ? i : i + num1.length - num2.length] || '0') +
      Number(num2[n1L ? i + num1.length - num2.length : i] || '0') + bit;
    ans = (result % 10).toString() + ans;
    bit = Math.floor(result / 10);
  }
  if (bit !== 0) ans = bit + ans;
  return ans;
}

console.log(multiply('2', '3')); // '6'
console.log(multiply('9', '9')); // '81'
console.log(multiply('123', '456')); // '56088'
console.log(multiply("9133", "0")); // '0'