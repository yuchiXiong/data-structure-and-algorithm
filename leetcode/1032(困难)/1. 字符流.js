/**
 * @param {string[]} words
 */
var StreamChecker = function (words) {
  this.words = words;
  this.str = '';
};

/** 
* @param {character} letter
* @return {boolean}
*/
StreamChecker.prototype.query = function (letter) {
  this.str += letter;
  return this.words.some(word => this.str.endsWith(word));
};

/**
* Your StreamChecker object will be instantiated and called as such:
* var obj = new StreamChecker(words)
* var param_1 = obj.query(letter)
*/