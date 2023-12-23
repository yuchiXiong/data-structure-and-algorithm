/**
 * 
1 15 14 13 12 11
2 16 21 20 10
3 17 19 9
4 18 8
5 7
6
 */




/**
 * @param {number} n - 行号N
 * @param {number} level - 当前绘制的是第几层
 * @param {number} val - 这一层的数字初始值
 * @param {number[][]} arr - 结果数组
 * @returns 
 */
const fn = (n, level = 0, val = 1, arr = new Array(n).fill('').map((_, i) => new Array(n).fill(' '))) => {
  if (!arr[level] || arr[level][level] !== " ") return [];

  let initValue = val;
  /** 垂直的直角边 */
  for (let i = level; i <= arr.length - level * 2 - 1; i++) {
    arr[i][level] = initValue++;
  }

  /** 斜边 */
  for (let i = arr.length - level * 2 - 2; i >= level; i--) {
    arr[i][arr.length - i - level - 1] = initValue++;
  }

  /** 水平的直角边 */
  for (let i = arr.length - level * 2 - 2; i > level; i--) {
    arr[level][i] = initValue++;
  }

  fn(n, level + 1, initValue, arr);

  return arr;
}

// console.log(fn(6));
console.log(fn(8));
// console.log(fn(6).map(i => i.filter(i => i !== -1)));
