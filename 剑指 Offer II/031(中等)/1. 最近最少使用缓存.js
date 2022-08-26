var DoublyLinkedNode = function (val, prev, next) {
  this.val = val;
  this.prev = prev;
  this.next = next;
}

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this._maxSize = capacity;
  this._size = 0;
  this._head = new DoublyLinkedNode(-1, null, null);
  this._tail = new DoublyLinkedNode(-1, null, null);
  this._head.next = this._tail;
  this._tail.prev = this._head;
  this._map = {};
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  const target = this._map[key];

  if (!target) return -1;

  // 断开当前节点的上下游
  target.prev?.next && (target.prev.next = target.next);
  target.next?.prev && (target.next.prev = target.prev);

  // 将当前节点与头节点的下一个节点连接
  target.next = this._head.next;
  this._head.next.prev = target;
  target.prev = this._head;
  this._head.next = target;

  return target.val.value;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  const target = this._map[key];

  if (target) {
    target.val = { key, value };
    this.get(target.val.key);
  } else {
    if (this._size >= this._maxSize) {
      // 移除尾节点
      delete this._map[this._tail.prev.val.key]
      this._tail.prev.prev.next = this._tail;
      this._tail.prev = this._tail.prev.prev;
      this._size--;
    }

    const node = new DoublyLinkedNode({ key, value }, this._head, this._head.next);
    this._head.next.prev = node;
    this._head.next = node;

    this._map[key] = node;
    this._size++;
  }

};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
const lRUCache = new LRUCache(2);
// lRUCache.put(1, 0);
// lRUCache.put(2, 2);
// console.log(lRUCache.get(1)); // 0
// lRUCache.put(3, 3);
// console.log(lRUCache.get(2)); // -1
// lRUCache.put(4, 4);
// console.log(lRUCache.get(1)); // -1
// console.log(lRUCache.get(3)); // 3
// console.log(lRUCache.get(4)); // 4

lRUCache.put(2, 1);
lRUCache.put(1, 1);
lRUCache.put(2, 3);
lRUCache.put(4, 1);
console.log(lRUCache.get(1)); // -1
console.log(lRUCache.get(2)); // 3
