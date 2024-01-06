/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertGreatestCommonDivisors = function (head) {
  let cur = head;
  while (cur && cur.next) {
    const nextVal = cur.next.val;
    const newNextVal = gcd(cur.val, nextVal);
    cur.next = new ListNode(
      newNextVal,
      cur.next
    );
    cur = cur.next.next;
  }

  return head;
};

const gcd = (a, b) => {
  for (let i = a; i >= 1; i--) {
    if (a % i == 0 && b % i == 0) return i;
  }
}