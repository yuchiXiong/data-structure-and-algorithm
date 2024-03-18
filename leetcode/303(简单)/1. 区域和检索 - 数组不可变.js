/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  this.sumList = nums.reduce((obj, cur, index) => {
      if (index === 0) {
          obj[0] = cur;
          return obj;
      } else {
          obj[index] = obj[index - 1] + cur; 
          return obj;
      }
  }, {});
};

/** 
* @param {number} left 
* @param {number} right
* @return {number}
*/
NumArray.prototype.sumRange = function(left, right) {
  return this.sumList[right] - (this.sumList[left - 1] || 0);
};

/**
* Your NumArray object will be instantiated and called as such:
* var obj = new NumArray(nums)
* var param_1 = obj.sumRange(left,right)
*/