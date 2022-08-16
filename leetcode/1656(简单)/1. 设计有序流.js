/**
 * @param {number} n
 */
var OrderedStream = function (n) {
  this.n = n;
  this.queue = [];
  this.ptr = 1;
};

/** 
* @param {number} idKey 
* @param {string} value
* @return {string[]}
*/
OrderedStream.prototype.insert = function (idKey, value) {
  this.queue[idKey - 1] = value;
  const ans = [];
  while (this.queue[this.ptr - 1]) {
    ans.push(this.queue[this.ptr - 1]);
    this.ptr++;
  }

  return ans;
};

/**
* Your OrderedStream object will be instantiated and called as such:
* var obj = new OrderedStream(n)
* var param_1 = obj.insert(idKey,value)
*/