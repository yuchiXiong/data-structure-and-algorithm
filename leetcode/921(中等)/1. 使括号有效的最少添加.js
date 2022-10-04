/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function (s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case '(':
        stack.push('(');
        break;
      case ')':
        if (stack[stack.length - 1] === '(')
          stack.pop();
        else
          stack.push(')');
        break;
      default:
        continue;
    }
  }

  return stack.length;
};

console.log(minAddToMakeValid("())")); // 1
console.log(minAddToMakeValid("(((")); // 3