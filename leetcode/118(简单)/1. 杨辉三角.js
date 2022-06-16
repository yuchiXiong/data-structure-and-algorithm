/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const result = [];
  for (let i = 1; i <= numRows; i++) {
    result.push(generateRow(i));
  }

  return result;
};

var generateRow = function (numRows) {
  if (numRows === 1) return [1];
  else if (numRows === 2) return [1, 1];
  else {
    const result = [1];
    const pre = generateRow(numRows - 1);

    for (let i = 1; i < numRows; i++) {
      if (i === numRows - 1) {
        result[i] = 1;
      } else {
        result[i] = pre[i - 1] + pre[i];
      }
    }

    return result;
  }
};

console.log(generate(5)); // [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
console.log(generate(1)); // [[1]]