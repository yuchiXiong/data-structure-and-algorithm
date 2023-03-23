/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function (nums, l, r) {
  return l.map((start, index) => {
    const end = r[index];

    const subArray = nums.slice(start, end + 1).sort((a, b) => a - b);
    return isArithmeticSequence(subArray);
  });
};

const isArithmeticSequence = arr => {
  let d = arr[1] - arr[0];
  let pre = arr[0];

  for (let i = 1; i < arr.length; i++) {
    const cur = arr[i];
    if (cur - pre !== d) return false;
    pre = cur;
  }

  return true;
}