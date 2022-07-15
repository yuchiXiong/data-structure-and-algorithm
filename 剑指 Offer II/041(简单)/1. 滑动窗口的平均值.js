/**
 * Initialize your data structure here.
 * @param {number} size
 */
var MovingAverage = function (size) {
  this.size = size;
  this.queue = [];
  this.start = 0;
  this.end = 0;
};

/** 
* @param {number} val
* @return {number}
*/
MovingAverage.prototype.next = function (val) {
  if (this.end - this.start === this.size) {
    this.start += 1;
  }
  this.queue.push(val);
  this.end += 1;

  let sum = 0;
  for (let i = this.start; i < this.end; i++) {
    sum += this.queue[i];
  }

  return sum / (this.end - this.start);
};

/**
* Your MovingAverage object will be instantiated and called as such:
* var obj = new MovingAverage(size)
* var param_1 = obj.next(val)
*/