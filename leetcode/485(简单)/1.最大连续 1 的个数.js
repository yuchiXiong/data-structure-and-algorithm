var findMaxConsecutiveOnes = function (nums) {
  return Math.max(
    ...nums
      .join('')
      .split('0')
      .map((item) => item.length)
  );
};

console.log(findMaxConsecutiveOnes([1,1,0,1,1,1])) // 3