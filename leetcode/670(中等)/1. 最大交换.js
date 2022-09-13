/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function (num) {
  let index = 0;
  const str = num.toString();
  const sorted = str.split('').sort();
  let dup = str;

  while (true) {

    const curIndex = dup.indexOf(sorted[sorted.length - index - 1]);

    if (index === curIndex) {
      const tmp = dup.split('');
      tmp[curIndex] = '-';
      dup = tmp.join('');
      index++;
      if (index > str.length - 1) return str;
      continue;
    }

    if ((curIndex !== index) && (str[curIndex] !== str[index])) {
      const curIndex = dup.lastIndexOf(sorted[sorted.length - index - 1]);
      const arr = str.split('');
      const tmp = arr[index];
      arr[index] = arr[curIndex];
      arr[curIndex] = tmp;
      return arr.join('');
    }

    const tmp = dup.split('');
    tmp[curIndex] = '-';
    dup = tmp.join('');

    index++;
  }
};

console.log(maximumSwap(2736)); // 7236
console.log(maximumSwap(9973)); // 9973
console.log(maximumSwap(98368)); // 98863
console.log(maximumSwap(1993));; // 9913