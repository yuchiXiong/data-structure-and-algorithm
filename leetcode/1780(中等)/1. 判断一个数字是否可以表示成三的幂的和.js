const convert = x => {
  const inner = n => {
    if (n === 0) return '';
    return `${inner(Math.floor(n / x))}${n % x}`
  }
  return inner;
}

/** 创建一个将给定参数n转为三进制的函数 */
const convert3 = convert(3);
console.log(convert3(12));

/** 创建一个将给定参数n转为七进制的函数 */
const convert7 = convert(7);
console.log(convert7(527));

/**
* @param {number} n
* @return {boolean}
*/
var checkPowersOfThree = function (n) {
  return !convert(3)(n).includes('2');
};