/**
 * @param {string} s
 * @return {string}
 */
var reformat = function (s) {
  const charStack = [];
  const numStack = [];
  if (s[0] >= '0' && s[0] <= '9') {
    numStack.push(s[0]);
  } else {
    charStack.push(s[0]);
  }

  let preState = s[0] >= '0' && s[0] <= '9' ? 'num' : 'char';
  let originStrResult = true;
  for (let i = 1; i < s.length; i++) {
    if (s[i] >= '0' && s[i] <= '9') {
      if (i > 0) {
        originStrResult = preState !== 'num';
        preState = 'num';
      }
      numStack.push(s[i]);
    } else {
      if (i > 0) {
        originStrResult = preState !== 'char';
        preState = 'char';
      }
      charStack.push(s[i]);
    }

  }
  if (originStrResult) {
    return s;
  }

  if (Math.abs(charStack.length - numStack.length) > 1) {
    return '';
  }

  let result = '';
  let i = 0;
  for (; i < Math.min(charStack.length, numStack.length); i++) {
    if (charStack.length > numStack.length) {
      result += charStack[i];
      result += numStack[i];
    } else {
      result += numStack[i];
      result += charStack[i];
    }
  }

  if (i < Math.max(charStack.length, numStack.length)) {
    result += charStack.length > numStack.length ? charStack[i] : numStack[i];
  }

  return result;
};

console.log(reformat("a0b1c2"), "a0b1c2".length === reformat("a0b1c2").length);
console.log(reformat("leetcode"), "leetcode".length === reformat("leetcode").length);
console.log(reformat("1229857369"), "1229857369".length === reformat("1229857369").length);
console.log(reformat("covid2019"), "covid2019".length === reformat("covid2019").length);
console.log(reformat("ab123"), "ab123".length === reformat("ab123").length);