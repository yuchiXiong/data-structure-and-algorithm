// @ts-check

/**
 * @param {string} s
 * @param {string[][]} knowledge
 * @return {string}
 */
var evaluate = function (s, knowledge) {
  const hash = knowledge.reduce((hash, cur) => {
    hash[cur[0]] = cur[1];
    return hash;
  }, {});

  let key = ''
  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case '(':
        key = '';
        break;
      case ')':
        const value = hash[key] || '?';
        s = s.replace(`(${key})`, value)
        i = i - (key.length + 2 - value.length);
        break;
      default:
        key += s[i];
        break;
    }
  }

  return s;
};