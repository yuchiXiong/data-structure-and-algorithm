/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var circularGameLosers = function (n, k) {
  const friends = new Array(n).fill(0);
  let i = 1;
  friends[0] = 1;
  prev = 0;
  while (true) {
    const next = i * k;
    if (friends[(prev + next) % n] === 1) break;
    friends[(prev + next) % n] = 1;
    prev = (prev + next) % n;
    i += 1;
  }

  return friends.map((i, index) => [i, index]).filter(pair => pair[0] === 0).map(i => i[1] + 1);
};