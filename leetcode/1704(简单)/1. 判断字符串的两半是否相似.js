/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {
  const dir = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  return s.slice(0, s.length / 2).split('').filter(i => dir.includes(i)).length === s.slice(s.length / 2).split('').filter(i => dir.includes(i)).length;
};