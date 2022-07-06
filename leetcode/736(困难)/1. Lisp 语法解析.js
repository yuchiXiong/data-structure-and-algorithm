/**
 * @param {string} expression
 * @param {object} varEnv
 * @return {number}
 */
var evaluate = function (expression, varEnv = { values: {}, outer: null }) {

  for (let i = 0; i < expression.length; i++) {
    if (expression[i] === '(') continue;

    if (expression[i - 1] === '(') {
      /** 从左括号开始获取函数名 */
      const funName = expression.slice(i, i + 4);
      /** 获取函数名后面的参数字符串 */
      const argStr = expression.slice(i + 4, expression.length - 1).trim();

      /** 括号栈 */
      const _stack = [];
      /** 参数表 */
      let args = [];
      /** 上一个截取位置 */
      let preSpace = 0;

      /** 当参数去除最外层的括号不含其它括号时，直接基于空格进行分割 */
      const _sub = argStr.slice(1, argStr.length - 1)
      if (_sub.includes('(') || _sub.includes(')')) {
        for (let j = 0; j < argStr.length; j++) {
          if (argStr[j] === '(') {
            _stack.push(j);
          } else if (argStr[j] === ')') {
            const index = _stack.pop();
            if (_stack.length === 0)
              args.push(argStr.slice(index, j + 1).trim());
            preSpace = j + 1;
          } else if (argStr[j] === ' ' && _stack.length === 0 && j > preSpace) {
            args.push(argStr.slice(preSpace, j).trim());
            preSpace = j;
          }
        }

        preSpace < argStr.length - 1 && (args.push(argStr.slice(preSpace, argStr.length).trim()));
      } else {
        args = argStr.split(' ');
      }

      switch (funName) {
        case 'let ':
          if (varEnv) {
            const currentVarEnv = {
              values: {},
              outer: varEnv
            }
            varEnv = currentVarEnv;
          }

          for (let j = 0; j < args.length - 1; j += 2) {
            varEnv.values[args[j]] = evaluate(args[j + 1], varEnv);

          }

          return evaluate(args[args.length - 1], varEnv);
        case 'add ':
          return evaluate(args[0], varEnv) + evaluate(args[1], varEnv);
        case 'mult':
          return evaluate(args[0], varEnv) * evaluate(args[1], varEnv);
      }
    } else {
      return isNaN(Number(expression)) ? findVar(varEnv, expression) : Number(expression)
    }

  }
};

const findVar = (varEnv, key) => {
  let _varEnv = varEnv;
  while (_varEnv !== null) {
    if (Object.keys(_varEnv.values).includes(key.trim())) return _varEnv.values[key.trim()];
    _varEnv = _varEnv.outer;
  }

  throw Error(`${key} is not undefined!`);
}

console.log([
  evaluate("(let x 2 (mult x (let x 3 y 4 (add x y))))") === 14,
  evaluate("(let x 3 x 2 x)") === 2,
  evaluate("(let x 1 y 2 x (add x y) (add x y))") === 5,
  evaluate("(let a 20 b (let a 10 30) c (add a b) 5)") === 5,
  evaluate("(let a 20 b (let a 10 30) c (add a b))") === 50,
  evaluate("(let a 10 30)") === 30,
  evaluate("(let a -122 b 0 (add (add 1 -4) (mult a 66)))") === -8055,
  evaluate("(add (mult 1 1) -10)") === -9,
  evaluate("(let x0 -4 x1 2 x2 -4 x3 3 x4 2 x5 3 x6 2 x7 2 x8 -1 x9 -1 (mult (mult (mult x2 -8) (add -5 (let x0 1 x5 -3 (add (add x7 (add (let x0 -5 x9 -4 (add (mult 1 1) -10)) (mult -8 (mult x3 -5)))) (add (let x0 3 x8 -1 (let x0 -1 x9 1 (add x4 -6))) x9))))) (mult (add (mult (add (mult -6 (mult (add x1 x4) -4)) (let x0 -2 x7 4 (mult (mult (let x0 -3 (mult 1 1)) (add (mult 1 1) (mult 1 1))) (mult -5 (mult -9 (mult 1 1)))))) -10) x5) (mult (mult x5 -7) x8))))") === -128534112,
  evaluate("(let x0 -4 x1 1 x2 -1 x3 -1 x4 3 x5 1 x6 -4 x7 -1 x8 -5 x9 3 (let x0 -5 x2 -2 x4 -4 x6 -4 x8 0 (let x0 3 x3 -1 x6 4 x9 -2 (let x0 0 x4 -3 x8 -2 (add (add x4 (let x0 -5 x7 1 (let x0 -2 x8 -2 (mult x2 x7)))) x0)))))") === -5,
  evaluate('0') === 0
].every(i => i));