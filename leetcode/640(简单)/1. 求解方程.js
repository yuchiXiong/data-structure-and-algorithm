/**
 * @param {string} equation
 * @return {string}
 */
var solveEquation = function (equation) {
  const [left, right] = equation.split('=');
  const leftObj = getObj(left);
  const rightObj = getObj(right);

  if (leftObj.x === rightObj.x && leftObj.b === rightObj.b) {
    return 'Infinite solutions';
  }

  if (leftObj.x === rightObj.x && leftObj.b !== rightObj.b) {
    return 'No solution';
  }

  return `x=${(rightObj.b - leftObj.b) / (leftObj.x - rightObj.x)}`;
};

/**
 * 
 * @param {string} expression 
 */
const getObj = expression => {
  return expression
    .replace(/\+/g, ' +')
    .replace(/\-/g, ' -')
    .split(' ')
    .reduce((acc, cur) => {
      if (cur.includes('x')) {
        const num = cur.split('x').filter(i => i)[0];
        if (num === undefined) {
          acc.x += 1;
        } else if (num === '-') {
          acc.x -= 1;
        } else if (num === '+') {
          acc.x += 1;
        } else {
          acc.x += Number(num);
        }
      } else {
        acc.b += Number(cur);
      }
      return acc;
    }, { x: 0, b: 0 });
}

console.log(solveEquation("x+5-3+x=6+x-2")); // x=2
console.log(solveEquation("x=x")); // Infinite solutions
console.log(solveEquation("2x=x")); // x=0