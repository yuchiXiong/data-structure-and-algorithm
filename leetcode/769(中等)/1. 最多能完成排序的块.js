/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function (arr) {
  const sorted = [...arr].sort((a, b) => a - b);
  const hash = {};
  sorted.forEach((i, index) => hash[i] = index);

  let result = 0;
  let isSortedByDesc = true;
  let curBlockIndex = -1;

  for (let i = 0; i < arr.length; i++) {
    if (i < arr.length - 1) {
      (arr[i] < arr[i + 1]) && (isSortedByDesc = false);
    }

    if (sorted[i] === arr[i] && curBlockIndex < i) {
      curBlockIndex = -1;
      result++;
    } else {
      if (curBlockIndex < i) {
        curBlockIndex = -1;
      }
      const correctPos = hash[arr[i]];
      if (correctPos > i) {
        if (curBlockIndex === -1) result++;
        curBlockIndex = Math.max(correctPos, curBlockIndex);
      }
    }
  }
  return isSortedByDesc ? 1 : result;
};

console.log(maxChunksToSorted([4, 3, 2, 1, 0])); // 1
console.log(maxChunksToSorted([1, 0, 2, 3, 4])); // 4
console.log(maxChunksToSorted([0, 2, 1, 4, 3])); // 3
console.log(maxChunksToSorted([1, 2, 0, 3])); // 2
console.log(maxChunksToSorted([0, 4, 2, 3, 1])); // 2