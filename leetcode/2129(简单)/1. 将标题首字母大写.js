/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {
  return title.split(' ').map(word => {
      if (word.length === 1 || word.length === 2) {
          return word.toLowerCase()
      } else {
          return word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase()
      }
  }).join(' ')
};