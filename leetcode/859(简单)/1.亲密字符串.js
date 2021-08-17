/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function (s, goal) {
  if (s.length !== goal.length) return false;
  if (s === goal && [...new Set(s.split(''))].length < s.length) return true;
  const indexList = [];
  for (let i = 0; i < s.length; i += 1) {
    if (s[i] !== goal[i]) {
      indexList.push(i);
    }
  }
  return (
    indexList.length === 2 &&
    s[indexList[0]] === goal[indexList[1]] &&
    s[indexList[1]] === goal[indexList[0]]
  );
};

console.log(buddyStrings('ab', 'ba')); //true
console.log(buddyStrings('ab', 'ab')); //false
console.log(buddyStrings('aa', 'aa')); //true
console.log(buddyStrings('aaaaaaabc', 'aaaaaaacb')); //true
console.log(buddyStrings('', 'aa')); //false
