/**
 * @param {number[]} player1
 * @param {number[]} player2
 * @return {number}
 */
var isWinner = function (player1, player2) {
  const player1Score = getScore(player1);
  const player2Score = getScore(player2);

  if (player1Score === player2Score) return 0;
  else if (player1Score > player2Score) return 1;
  else {
    return 2;
  }
};

const getScore = arr => {
  return arr.reduce((sum, cur, index) => {
    if (index === 0) return sum + cur;
    else if (index === 1) {
      const hasTen = arr[index - 1] === 10
      return sum + (hasTen ? cur * 2 : cur);
    } else {
      const firstTen = arr[index - 2] === 10;
      const second = arr[index - 1] === 10;
      return sum + ((firstTen || second) ? cur * 2 : cur);
    }
  }, 0);
}