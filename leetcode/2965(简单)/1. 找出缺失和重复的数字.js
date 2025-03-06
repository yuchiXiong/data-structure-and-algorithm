/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function(grid) {
  const arr = grid.flat();
  const origin = new Array(grid.length * grid.length).fill(0).map((_, i) => i + 1);

  const arrSum = arr.reduce((sum, cur) => sum + cur, 0);
  const originSum = origin.reduce((sum, cur) => sum + cur, 0);

  const arrPowSum = arr.reduce((sum, cur) => sum + cur * cur, 0);
  const originPowSum = origin.reduce((sum, cur) => sum + cur * cur, 0);

  // arrSum - a + b = originSum
  // arrSum = originSum - b + a;
  // arrSum - originSum = a - b
  // a - b = arrSum - originSum
  const d1 = arrSum - originSum;

  // arrPowSum - a² + b² = originPowSum
  // arrPowSum = originPowSum - b² + a²
  // arrPowSum - originPowSum = a² - b²
  // a² - b² = arrSum - originPowSum
  const d2 = arrPowSum - originPowSum;

  // d1 = a - b
  // d2 = a² - b²
  // a + b = d2 / d1 = (a² - b²) / (a - b) = (a + b)(a - b) / (a - b)
  const d3 = d2 / d1;

  // d1 = a - b
  // a = d1 + b
  // d3 = a + b = d1 + 2b
  // 2b = d3 - d1
  // b = (d3 - d1) / 2
  
  // b = a - d1
  // d3 = a + b = a + a - d1 = 2a - d1
  // 2a = d1 + d3
  // a = (d1 + d3) / 2
  return [
    (d1 + d3) / 2,
    (d3 - d1) / 2
  ]
};