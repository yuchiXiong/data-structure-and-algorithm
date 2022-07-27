/**
 * @param {string} expression
 * @return {string}
 */
var fractionAddition = function (expression) {

  /** 切分的同时求和 */
  let subExp = [];
  let j = 0;
  const resExp = {
    molecular: 0,
    denominator: 1,
  }

  for (let i = 0; i < expression.length; i++) {
    if (j < i && i === expression.length - 1) {
      subExp.push(expression.substring(j));
    } else if (expression[i] === '-' && expression[i + 1] === '-') {
      subExp.push(expression.substring(j, i));
      j = i + 2;
    } else if (expression[i] === '+') {
      subExp.push(expression.substring(j, i));
      j = i + 1;
    } else if (expression[i] === '-') {
      i !== 0 && subExp.push(expression.substring(j, i));
      j = i;
    }

    if (subExp.length) {
      const cur = subExp.pop().split('/');

      if (resExp.denominator === Number(cur[1])) {
        resExp.molecular += Number(cur[0]);
      } else {
        resExp.molecular *= Number(cur[1]);
        resExp.molecular += Number(cur[0]) * resExp.denominator;
        resExp.denominator *= Number(cur[1]);
      }
    }
  }

  /** 分数化简 */
  if (resExp.molecular === 0) {
    return '0/1';
  }

  const absMolecular = Math.abs(resExp.molecular);
  const absDenominator = Math.abs(resExp.denominator);
  for (let i = Math.min(absMolecular, absDenominator); i >= 2; i--) {
    if (absMolecular % i === 0 && absDenominator % i === 0) {
      resExp.molecular /= i;
      resExp.denominator /= i;
      break;
    }
  }

  return `${resExp.molecular}/${resExp.denominator}`;
};

console.log(fractionAddition("-1/2+1/2")); // "0/1"
console.log(fractionAddition("-1/2+1/2+1/3")); // "1/3"
console.log(fractionAddition("1/3-1/2")); // "-1/6"
console.log(fractionAddition("7/3+5/2-3/10")); // "68/15"