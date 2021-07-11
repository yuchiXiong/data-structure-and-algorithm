/**
 * 二分查找
 * @param {Array} arr - 目标数组
 * @param {Number} target - 目标
 */
function binarySearch(arr, target) {
  let low = 0;
  let hight = arr.length - 1;

  while (low <= hight) {
    const mid = parseInt((low + hight) / 2);
    const item = arr[mid];

    if (item === target) {
      return mid;
    } else if (item > target) {
      hight = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
}

// 目标数组
let mockArr = [];
for (let i = 0; i <= 100000000; i += 1) {
  mockArr.push(Math.ceil(Math.random() * 10000000));
}
mockArr = Array.from(new Set(mockArr.sort((num1, num2) => num1 - num2)));

// 目标元素
const target = mockArr[Math.ceil(Math.random() * 100000000)];

console.time('binarySearch');
const index = binarySearch(mockArr, target);
console.timeEnd('binarySearch');