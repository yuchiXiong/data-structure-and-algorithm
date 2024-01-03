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
var removeNodes = function (head) {
  const list = [];
  let cur = head;

  while (cur) {
    list.push(cur.val);
    cur = cur.next;
  }

  const maxMap = {};
  for (let i = list.length - 1; i >= 0; i--) {
    if (i === list.length - 1) {
      maxMap[i] = list[i];
    } else {
      maxMap[i] = Math.max(list[i], maxMap[i + 1])
    }
  }

  let result = new ListNode(
    -1,
    head
  );
  let originResult = result;

  for (let i = 0; i < list.length - 1; i++) {
    const curVal = list[i];
    const hasBiggestInRight = maxMap[i + 1] > curVal;
    if (hasBiggestInRight) {
      result.next = result.next.next;
    } else {
      result = result.next;
    }
  }

  return originResult.next;
};


// [5, 2, 13, 3, 8]
const testLinkedList1 = new ListNode(
  5,
  new ListNode(
    2,
    new ListNode(
      13,
      new ListNode(
        3,
        new ListNode(8, null)
      )
    )
  )
);

// [13, 8]
console.log(removeNodes(testLinkedList1))