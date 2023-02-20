/**
 * @param {number[]} ranks
 * @param {character[]} suits
 * @return {string}
 */
var bestHand = function (ranks, suits) {
  if ([...new Set(suits)].length === 1) return 'Flush';

  const hash = ranks.reduce((obj, cur) => {
    obj[cur] = obj[cur] ? obj[cur] + 1 : 1;
    return obj;
  }, {});

  switch (Math.max(...Object.values(hash))) {
    case 4:
    case 3:
      return 'Three of a Kind';
    case 2:
      return 'Pair';
    default:
      return 'High Card';
  }
};