/**
 * @param {string} target
 * @return {string}
 */
var alphabetBoardPath = function (target) {
  const hash = { a: [0, 0], b: [0, 1], c: [0, 2], d: [0, 3], e: [0, 4], f: [1, 0], g: [1, 1], h: [1, 2], i: [1, 3], j: [1, 4], k: [2, 0], l: [2, 1], m: [2, 2], n: [2, 3], o: [2, 4], p: [3, 0], q: [3, 1], r: [3, 2], s: [3, 3], t: [3, 4], u: [4, 0], v: [4, 1], w: [4, 2], x: [4, 3], y: [4, 4], z: [5, 0] };

  return target.split('').reduce((obj, cur) => {
    const targetPos = hash[cur];

    if (targetPos[0] !== obj.curPos[0] && targetPos[1] !== obj.curPos[1]) {
      const xCount = targetPos[1] - obj.curPos[1];
      const yCount = targetPos[0] - obj.curPos[0];

      if (targetPos.join('') === '50') {
        obj.result += xCount > 0 ? 'R'.repeat(xCount) : 'L'.repeat(-xCount);
        obj.curPos[1] += xCount;

        obj.result += yCount > 0 ? 'D'.repeat(yCount) : 'U'.repeat(-yCount);
        obj.curPos[0] += yCount;
      } else {
        obj.result += yCount > 0 ? 'D'.repeat(yCount) : 'U'.repeat(-yCount);
        obj.curPos[0] += yCount;

        obj.result += xCount > 0 ? 'R'.repeat(xCount) : 'L'.repeat(-xCount);
        obj.curPos[1] += xCount;
      }

    } else if (targetPos[0] === obj.curPos[0]) {
      const count = targetPos[1] - obj.curPos[1];
      obj.result += count > 0 ? 'R'.repeat(count) : 'L'.repeat(-count);
      obj.curPos[1] += count;
    } else if (targetPos[1] === obj.curPos[1]) {
      const count = targetPos[0] - obj.curPos[0];
      obj.result += count > 0 ? 'D'.repeat(count) : 'U'.repeat(-count);
      obj.curPos[0] += count;
    }

    obj.result += '!';
    return obj;
  }, {
    result: '',
    curPos: [0, 0]
  }).result
};