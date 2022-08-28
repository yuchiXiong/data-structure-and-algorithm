/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  return hashCode(s) === hashCode(t);
};

const hashCode = str => str.split('').reduce((hash, i, index) => {
  if (hash.map[i] !== undefined) {
    hash.str += hash.map[i].toString() + "|";
  } else {
    hash.map[i] = index;
    hash.str += index.toString();
  }
  return hash;
}, {
  map: {},
  str: ''
}).str;