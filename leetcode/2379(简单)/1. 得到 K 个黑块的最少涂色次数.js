/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function (blocks, k) {

  let result = Infinity;
  for (let i = 0; i <= blocks.length - k; i++) {
    result = Math.min(result, totalWBlocks(blocks, i, i + k));
  }

  return result;
};

const totalWBlocks = (blocks, start, end) => {
  let result = 0;
  for (let i = start; i < end; i++) {
    if (blocks[i] === 'W') result += 1;
  }

  return result;
}