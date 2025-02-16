/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
  return arr.reduceRight((result, cur, index) => {
    if (index === arr.length - 1) {
      result[index] = -1
    } else {
      result[index] = Math.max(arr[index + 1], result[index + 1])
    }
    return result;
  }, [])
};