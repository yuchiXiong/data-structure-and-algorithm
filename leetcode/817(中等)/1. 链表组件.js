/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number[]} nums
 * @return {number}
 */
var numComponents = function (head, nums) {
  let preNode = head;
  let result = 0;
  const hash = {};
  nums.forEach(i => hash[i] = 1);

  if (preNode.next === null) return Number(hash[preNode.val]);

  while (preNode.next) {
    if (hash[preNode.val] && hash[preNode.next.val]) {
    } else {
      if (hash[preNode.val])
        result++;
    }

    if (preNode.next.next === null && preNode.next.val !== -1) {
      preNode.next.next = new ListNode(-1);
    }

    preNode = preNode.next;
  }

  return result;
};