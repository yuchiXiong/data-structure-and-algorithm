/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function (dictionary, sentence) {
  return sentence.split(' ').map(i => {
    let _i = i;
    dictionary.sort((a, b) => b.length - a.length).forEach(d => {
      if (i.startsWith(d)) _i = d;
    });
    return _i;
  }).join(' ');
};