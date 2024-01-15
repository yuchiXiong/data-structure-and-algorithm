function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

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
var deleteDuplicates = function (head) {
  const countMap = {};
  let cur = head;
  while (cur) {
    countMap[cur.val] = countMap[cur.val] ? countMap[cur.val] + 1 : 1;
    cur = cur.next;
  }

  const virtualHead = new ListNode(-1, head);

  cur = virtualHead;

  const onlyOnce = Object.keys(countMap).filter(key => countMap[key] === 1).map(Number);

  while (cur && cur.next) {
    if (!onlyOnce.includes(cur.next.val)) {
      cur.next = cur.next.next;
    } else {
      cur = cur.next;
    }
  }

  return virtualHead.next;
};

const case1 = new ListNode(
  1,
  new ListNode(
    2,
    new ListNode(
      3,
      new ListNode(
        3,
        new ListNode(
          4,
          new ListNode(
            4,
            new ListNode(
              5, null)
          )
        )
      )
    )
  )
)

console.log(deleteDuplicates(case1))