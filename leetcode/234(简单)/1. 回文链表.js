/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  const arr = [];
  let cur = head;
  while (cur) {
    arr.push(cur.val);
    cur = cur.next;
  }

  return arr.join('') === arr.reverse().join('');
};