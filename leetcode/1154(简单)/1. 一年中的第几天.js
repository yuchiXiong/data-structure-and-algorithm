/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function (date) {
  const [year, month, day] = date.split('-').map(Number);

  const flag = year % 4 === 0 && !(year % 100 === 0 && year % 400 !== 0);;

  let result = 0;
  switch (month - 1) {
    case 11:
      result += 30;
    case 10:
      result += 31;
    case 9:
      result += 30;
    case 8:
      result += 31;
    case 7:
      result += 31;
    case 6:
      result += 30;
    case 5:
      result += 31;
    case 4:
      result += 30;
    case 3:
      result += 31;
    case 2:
      result += flag ? 29 : 28;
    case 1:
      result += 31;
  }

  return result + day;
};