/**
 * @param {number} n
 * @return {number}
 */
var reinitializePermutation = function (n) {
  const perm = new Array(n).fill('').map((_, i) => i);
  let cur = perm;

  let result = 0;
  do {
    result += 1;
    cur = cur.map((_, i) => {
      return i % 2 === 0 ? cur[Math.floor(i / 2)] : cur[Math.floor(n / 2 + (i - 1) / 2)];
    });

    if (cur.join('') === perm.join('')) return result;
  } while (true);


};