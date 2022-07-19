var MyCalendarTwo = function () {
  this.once = [];
  this.twice = [];
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendarTwo.prototype.book = function (start, end) {

  for (let i = 0; i < this.twice.length; i++) {
    const [l, r] = this.twice[i];
    if (l < end && r > start) {
      return false;
    }
  }

  for (let i = 0; i < this.once.length; i++) {
    const [l, r] = this.once[i];
    if (l < end && r > start) {
      this.twice.push([Math.max(l, start), Math.min(r, end)]);
    }
  }

  this.once.push([start, end]);

  return true;
};

/**
 * Your MyCalendarTwo object will be instantiated and called as such:
 * var obj = new MyCalendarTwo()
 * var param_1 = obj.book(start,end)
 */
const MyCalendar = new MyCalendarTwo();
console.log(MyCalendar.book(10, 20)); // returns true
console.log(MyCalendar.book(50, 60)); // returns true
console.log(MyCalendar.book(10, 40)); // returns true
console.log(MyCalendar.book(5, 15)); // returns false
console.log(MyCalendar.book(5, 10)); // returns true
console.log(MyCalendar.book(25, 55)); // returns true