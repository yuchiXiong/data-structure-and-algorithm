/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
  if (arr.length < 3) return false;

  const mountainTopIndex = arr.indexOf(Math.max(...arr));

  const left = arr.join('').substr(0, mountainTopIndex + 1).split('');
  const right = arr.join('').substr(mountainTopIndex + 1, arr.length - 1).split('');
  console.log(arr, left, right);

  // console.log(left, right);

  return (
    left.join('') === left.sort().join('') &&
    right.join('') === right.reverse().join('') &&
    left.length + right.length === arr.length
  );
};

// console.log(validMountainArray([2, 1])); // false
// console.log(validMountainArray([3, 5, 5])); // false
console.log(validMountainArray([0, 3, 2, 1])); // true
