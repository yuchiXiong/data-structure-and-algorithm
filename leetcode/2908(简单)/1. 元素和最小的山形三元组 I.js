/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumSum = function(nums) {
  let min = -1;
  for (let i = 0; i < nums.length; i++) {
      for (let j = 0; j < nums.length; j++) {
          for (let k = 0; k < nums.length; k++ ) {
              if ((new Set([i, j, k])).size !== 3) continue;
              if (!(i < j && j < k)) continue;

              const a1 = nums[i];
              const a2 = nums[j];
              const a3 = nums[k];
              if (!isTargetTurple(a1, a2, a3)) continue;

              const result = a1 + a2 + a3;
              console.log(i, j, k, min, result)

              min = min === -1 
                  ? result
                  : Math.min(min, result);
              
          }
      }
  }

  return min;
};

const isTargetTurple = (a1, a2, a3) => {
  return (a1 < a2) && (a3 < a2);
}