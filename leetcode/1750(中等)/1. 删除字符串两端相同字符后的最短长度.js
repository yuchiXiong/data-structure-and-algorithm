/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function (s) {

  while (s[0] === s[s.length - 1] && s.length > 1) {
    const start = s[0];
    const end = s[s.length - 1];
    s = removeStart(s, start);
    s = removeEnd(s, end);
  }

  return s.length;
};

const removeStart = (str, char) => {
  while (str[0] === char) {
    str = str.slice(1, str.length);
  }

  return str;
}

const removeEnd = (str, char) => {
  while (str[str.length - 1] === char) {
    str = str.slice(0, str.length - 1);
  }

  return str;
}