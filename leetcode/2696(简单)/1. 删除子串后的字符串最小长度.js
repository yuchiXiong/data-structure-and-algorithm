/**
 * @param {string} s
 * @return {number}
 */
var minLength = function (s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const cur = s[i];
    const stackLast = stack[stack.length - 1];

    const isAB = stackLast === 'A' && cur === 'B';
    const isCD = stackLast === 'C' && cur === 'D'
    if (isAB || isCD) {
      stack.pop()
    } else {
      stack.push(s[i]);
    }
  }

  return stack.length;
};

const timeoutcase = "BGACACCCCACCACCACACACACCACDBDDBDBDBDBDDBDDBDDDDBDBMANAACCCCCCCDDDDDDDBBAAACCACABDBDDBBB";

console.time('case1')
console.log(minLength(timeoutcase))
console.timeEnd('case1')