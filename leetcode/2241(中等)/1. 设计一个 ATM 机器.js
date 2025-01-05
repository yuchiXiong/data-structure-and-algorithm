
var ATM = function() {
  this.amountListComment = [20, 50, 100, 200, 500]
  this.amountList = [0, 0, 0, 0, 0]
};

/** 
* @param {number[]} banknotesCount
* @return {void}
*/
ATM.prototype.deposit = function(banknotesCount) {
  this.amountList = this.amountList.map((amount, index) => amount + banknotesCount[index]);
};

/** 
* @param {number} amount
* @return {number[]}
*/
ATM.prototype.withdraw = function(amount) {
  const newAmountList = [...this.amountList];

  for (let i = newAmountList.length - 1; i >= 0; i--) {
      if (newAmountList[i] === 0) continue;

      const cur = this.amountListComment[i];
      if (amount >= cur) {
          const total = Math.min(newAmountList[i], Math.floor(amount / cur));

          amount -= cur * total;
          newAmountList[i] -= total;
      }
      
  }

  if (amount !== 0) {
      return [-1]
  } else {
      const result = this.amountList.map((amount, index) => amount - newAmountList[index])
      this.amountList = newAmountList;
      return result;
  }
};

/** 
* Your ATM object will be instantiated and called as such:
* var obj = new ATM()
* obj.deposit(banknotesCount)
* var param_2 = obj.withdraw(amount)
*/