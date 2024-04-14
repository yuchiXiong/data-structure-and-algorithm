
var MyHashSet = function() {
  this.list = [];
};

/** 
* @param {number} key
* @return {void}
*/
MyHashSet.prototype.add = function(key) {
  this.list[key] = true;
};

/** 
* @param {number} key
* @return {void}
*/
MyHashSet.prototype.remove = function(key) {
  this.list[key] = false;
};

/** 
* @param {number} key
* @return {boolean}
*/
MyHashSet.prototype.contains = function(key) {
  return !!this.list[key]
};

/**
* Your MyHashSet object will be instantiated and called as such:
* var obj = new MyHashSet()
* obj.add(key)
* obj.remove(key)
* var param_3 = obj.contains(key)
*/