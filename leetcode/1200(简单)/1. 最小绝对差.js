/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
  let result = [];
  let _sub = null;
  const _arr = arr.sort((a, b) => a - b);

  for (let i = 1; i < _arr.length; i++) {
    if (i === 1) {
      result.push([_arr[0], _arr[1]]);
      _sub = Math.abs(_arr[0] - _arr[1]);
    } else {
      if (_sub > Math.abs(_arr[i] - _arr[i - 1])) {
        result = [[_arr[i - 1], _arr[i]]];
        _sub = Math.abs(_arr[i] - _arr[i - 1]);
      } else if (_sub === Math.abs(_arr[i] - _arr[i - 1])) {
        result.push([_arr[i - 1], _arr[i]]);
      }
    }
  }

  return result;
};

console.log(minimumAbsDifference([4, 2, 1, 3]));
console.log(minimumAbsDifference([40, 11, 26, 27, -20]));