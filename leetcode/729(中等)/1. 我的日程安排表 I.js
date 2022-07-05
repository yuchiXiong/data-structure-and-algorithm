var MyCalendar = function () {
  this.list = [];
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function (start, end) {
  if (this.list.length === 0) {
    this.list.push([start, end]);
    return true;
  } else {
    const result = this.list.every(i => (i[1] <= start || i[0] >= end));
    result && this.list.push([start, end]);
    return result;
  }
};

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */