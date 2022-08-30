/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (head === null) return null;
  let p = head;
  let counter = 0;

  while (true) {
    counter++;
    if (p.next === null) {
      p.next = head;
      break;
    }
    p = p.next;
  }

  p = p.next;
  for (let i = 0; i < counter - k % counter - 1; i++) {
    p = p.next;
  }

  const res = p.next;
  p.next = null;
  return res;
};