/**
 * @param {string} s
 * @param {number[]} distance
 * @return {boolean}
 */
var checkDistances = function (s, distance) {

  return s.split('').every(char => {
    const left = s.indexOf(char);
    const right = s.lastIndexOf(char);
    return right - left - 1 === distance[char.charCodeAt() - 97];
  });
};