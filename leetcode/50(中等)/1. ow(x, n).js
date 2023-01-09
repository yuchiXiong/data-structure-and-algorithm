/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  const powFn = (x, base) => n => {
    if (Math.abs(x) < Number.EPSILON) return 0;

    if (n === 0) return 1;
    else if (n < 0) return powFn(1 / x, 1 / x)(-n);
    else {
      const cur = powFn(x, base)(Math.floor(n / 2));
      return cur * cur * (n % 2 === 0 ? 1 : base);
    }
  }

  return powFn(x, x)(n);
};