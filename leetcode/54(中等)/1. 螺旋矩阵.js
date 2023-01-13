/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  return round(matrix, 0, 0, matrix.length - 1, matrix[0].length - 1)
};

const round = (arr, x1, y1, x2, y2) => {
  if (x1 > x2 || y1 > y2) return [];
  if (x1 === x2 && y1 === y2) return [arr[x1][y1]];
  if (x1 === x2) return arr[x1].filter((_, i) => i >= y1 && i <= y2).map(i => i);
  if (y1 === y2) return arr.filter((_, i) => i >= x1 && i <= x2).map(i => i[y1]);

  const result = [arr[x1][y1]];
  let startX = x1, startY = y1 + 1;
  let op = right;
  while (!(x1 === startX && y1 === startY)) {
    result.push(arr[startX][startY]);
    if (startX === x1 && startY === y2) {
      op = down;
    } else if (startX === x2 && startY === y2) {
      op = left;
    } else if (startX === x2 && startY === x1) {
      op = up
    }
    [startX, startY] = op(startX, startY);
  }

  return result.concat(round(arr, x1 + 1, y1 + 1, x2 - 1, y2 - 1))
}

const right = (x, y) => [x, y + 1];
const down = (x, y) => [x + 1, y];
const left = (x, y) => [x, y - 1];
const up = (x, y) => [x - 1, y];