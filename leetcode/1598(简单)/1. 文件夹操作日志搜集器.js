/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function (logs) {
  const stack = [];
  for (let i = 0; i < logs.length; i++) {
    if (logs[i] === './') continue;
    if (logs[i] === '../') stack.pop();
    else stack.push(logs[i]);
  }

  return stack.length;
};