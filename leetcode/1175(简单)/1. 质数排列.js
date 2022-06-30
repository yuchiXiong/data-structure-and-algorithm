/**
 * @param {number} n
 * @return {number}
 */
var numPrimeArrangements = function (n) {
  if (n === 1) return 1;
  let count = 0;
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) count++;
  }
  return Number(fx(count) * fx(n - count) % BigInt(10 ** 9 + 7));
};

const isPrime = n => {
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  return true;
}

const fx = n => new Array(n).fill("").reduce((res, i, index) => BigInt(res) * BigInt(index + 1) % BigInt(10 ** 9 + 7), 1);

// 2,3,5,7,
// 11,13,17,19,
// 23,29,
// 31,37,
// 41,43,47,
// 53,59,
// 61,67,
// 71,73,79,
// 83,89,
// 97

// console.log(30, fx(10) * fx(20) % (10 ** 9 + 7) === 13697484);
// console.log(40, fx(12) * fx(28) % (10 ** 9 + 7) === 965722612);

console.log(numPrimeArrangements(100)); // 682289015