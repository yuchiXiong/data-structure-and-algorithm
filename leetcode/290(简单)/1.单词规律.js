/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  let result = true;
  const chars = s.split(' ');
  const patternMapping = {};

  if (chars.length !== pattern.length) return false;

  for (let i = 0; i < chars.length; i += 1) {
    // console.log(chars[i])
    patternMapping[pattern[i]] = patternMapping[pattern[i]] || chars[i];
    if (patternMapping[pattern[i]] !== chars[i]) {
      result = false;
      break;
    }
  }

  if (
    [...new Set(Object.values(patternMapping))].length !==
    Object.keys(patternMapping).length
  )
    return false;

  return result;
};

let pattern = 'abba',
  str = 'dog cat cat dog';

console.log(wordPattern(pattern, str)); // true

(pattern = 'abba'), (str = 'dog cat cat fish');
console.log(wordPattern(pattern, str)); // false

(pattern = 'aaaa'), (str = 'dog cat cat dog');
console.log(wordPattern(pattern, str)); // false

(pattern = 'abba'), (str = 'dog dog dog dog');
console.log(wordPattern(pattern, str)); // false
