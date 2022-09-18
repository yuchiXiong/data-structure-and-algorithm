/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  return generate(rowIndex + 1)[rowIndex]
};

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

console.log(getRow(3)); // [1, 3, 3, 1]
console.log(getRow(0)); // [1]
console.log(getRow(1)); // [1, 1]