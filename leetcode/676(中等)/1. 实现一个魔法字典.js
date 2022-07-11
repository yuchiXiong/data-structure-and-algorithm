var MagicDictionary = function () {
  this.dict = [];
};

/** 
* @param {string[]} dictionary
* @return {void}
*/
MagicDictionary.prototype.buildDict = function (dictionary) {
  this.dict = dictionary;
};

/** 
* @param {string} searchWord
* @return {boolean}
*/
MagicDictionary.prototype.search = function (searchWord) {
  if (this.dict.length === 0) return false;

  for (let i = 0; i < this.dict.length; i++) {
    if (searchWord.length !== this.dict[i].length) continue;
    let count = 0;
    for (let j = 0; j < this.dict[i].length; j++) {
      if (searchWord[j] !== this.dict[i][j]) {
        count++;
      }
    }
    if (count === 1) return true;
  }

  return false;
};

/**
* Your MagicDictionary object will be instantiated and called as such:
* var obj = new MagicDictionary()
* obj.buildDict(dictionary)
* var param_2 = obj.search(searchWord)
*/

const magicDictionary = new MagicDictionary();
magicDictionary.buildDict(["hello", "leetcode"]);
console.log(magicDictionary.search("hello")); // 返回 False
console.log(magicDictionary.search("hhllo")); // 将第二个 'h' 替换为 'e' 可以匹配 "hello" ，所以返回 True
console.log(magicDictionary.search("hell")); // 返回 False
console.log(magicDictionary.search("leetcoded")); // 返回 False
