/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
var canFormArray = function (arr, pieces) {
  if (pieces.reduce((sum, i) => sum + i.length, 0) !== arr.length) return false;

  return pieces.every(piece => {
    const start = arr.indexOf(piece[0]);
    let j = start;
    let i = 0;

    while (j < start + piece.length) {
      if (arr[j] !== piece[i]) {
        return false
      }
      j++;
      i++;
    }
    return true;
  })
};