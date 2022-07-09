/**
 * @param {number[]} arr
 * @return {number}
 */
var lenLongestFibSubseq = function (arr) {
  const hash = {};
  let result = 0;
  arr.forEach((i, index) => hash[i] = index);

  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      let _i = i, _j = j;
      let count = 0;

      while (hash[arr[_i] + arr[_j]] !== undefined) {
        count++;
        const next = hash[arr[_i] + arr[_j]]
        _i = _j;
        _j = next;
      }
      const _cresult = count === 0 ? 0 : count + 2;
      result = _cresult > result ? _cresult : result;
    }
  }
  return result;
};



console.log('result', lenLongestFibSubseq([1, 2, 3, 4, 5, 6, 7, 8])); // 5
console.log('result', lenLongestFibSubseq([1, 3, 7, 11, 12, 14, 18])); // 3
console.log('result', lenLongestFibSubseq([2, 4, 7, 8, 9, 10, 14, 15, 18, 23, 32, 50])); // 5
