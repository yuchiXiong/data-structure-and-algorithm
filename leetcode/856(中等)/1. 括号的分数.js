/**
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses = function (s) {
  if (s === '') return 0.5;
  if (s === '()') return 1;

  const stack = [];
  let score = 0;
  let preIndex = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(s[i]);
    } else {
      stack.pop();
    }

    if (stack.length === 0) {
      score += 2 * scoreOfParentheses(s.substr(preIndex + 1, i - preIndex - 1));
      preIndex = i + 1;
    }
  }

  return score;
};

console.log(scoreOfParentheses('()')); // 1
console.log(scoreOfParentheses('(())')); // 2
console.log(scoreOfParentheses('()()')); // 2
console.log(scoreOfParentheses("(()(()))")); // 6