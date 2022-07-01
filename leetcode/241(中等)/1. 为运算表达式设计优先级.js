/**
 * @param {string} expression
 * @return {number[]}
 */
var diffWaysToCompute = function (expression) {
  const opNums = expression.split(/[-+*]/);
  if (opNums.length === 1) return [Number(opNums[0])];
  if (opNums.length === 2) return [eval(expression)];

  const result = [];

  for (let i = 0; i < expression.length; i++) {
    if (['+', '-', '*'].includes(expression[i])) {
      let left = diffWaysToCompute(expression.slice(0, i));

      let right = diffWaysToCompute(expression.slice(i + 1));

      for (let j = 0; j < left.length; j++) {
        for (let k = 0; k < right.length; k++) {
          result.push(eval(`(${left[j]})${expression[i]}(${right[k]})`));
        }
      }
    }
  }

  return result;
};


console.log(diffWaysToCompute("2-1-1")) // [0,2]
console.log(diffWaysToCompute("2*3-4*5")) // [-34,-14,-10,-10,10]