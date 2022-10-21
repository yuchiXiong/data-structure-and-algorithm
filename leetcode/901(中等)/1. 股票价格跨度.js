var StockSpanner = function () {
  this.arr = [];
};

/** 
* @param {number} price
* @return {number}
*/
StockSpanner.prototype.next = function (price) {
  this.arr.push(price);
  let i = this.arr.length - 1;
  let result = 0;
  while (this.arr[i] <= price) {
    result = result + 1;
    i = i - 1;
  }

  return result;
};

/**
* Your StockSpanner object will be instantiated and called as such:
* var obj = new StockSpanner()
* var param_1 = obj.next(price)
*/