/**
 * @param {string[]} words
 */
var WordFilter = function (words) {
  this.words = words;
  this.cache = {};
};

/** 
* @param {string} pref 
* @param {string} suff
* @return {number}
*/
WordFilter.prototype.f = function (pref, suff) {
  if (this.cache[`${pref}-${suff}`]) return this.cache[`${pref}-${suff}`];

  for (let i = this.words.length - 1; i >= 0; i--) {
    if (this.words[i].startsWith(pref) && this.words[i].endsWith(suff)) {
      this.cache[`${pref}-${suff}`] = i;
      return i;
    };
  }

  return -1;
};

/**
* Your WordFilter object will be instantiated and called as such:
* var obj = new WordFilter(words)
* var param_1 = obj.f(pref,suff)
*/