/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
  const pq = new PriorityQueue({compare: (a, b) => a - b})

  for (let i = 0; i < nums.length; i += 1) {
      pq.enqueue(nums[i]);
  }

  let result = 0;
  
  while(pq.front() && pq.front() < k) {
      const x1 = pq.dequeue();
      const x2 = pq.dequeue();
      const newElement = Math.min(x1, x2) * 2 + Math.max(x1, x2);
      pq.enqueue(newElement)
      result += 1;
  }

  return result;
};