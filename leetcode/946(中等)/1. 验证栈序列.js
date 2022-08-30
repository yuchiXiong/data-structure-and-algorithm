/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
  let stack = [];
  let i = j = 0;
  while (pushed.length !== 0 || popped.length !== 0) {
    if (stack[stack.length - 1] === popped[0]) {
      stack.pop();
      popped.shift();
    } else {
      if (pushed.length > 0) {
        stack.push(pushed[0]);
        pushed.shift();
      } else {
        return false;
      }
    }
  }

  return true;
};