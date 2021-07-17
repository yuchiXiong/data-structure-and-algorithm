/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
  // * 加个toString方法方便调试
  this.toString = function () {
    const result = [];
    let node = this;
    while (true) {
      result.push(node.val);
      if (node.next) {
        node = node.next;
      } else {
        break;
      }
    }
    return result.toString();
  };
}
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function (list1, a, b, list2) {
  let list1NodeEnd = list1;
  let counter = 0;
  while (true) {
    if (counter === b + 1) {
      let list2Node = list2;
      while (true) {
        if (list2Node.next) {
          list2Node = list2Node.next;
        } else {
          list2Node.next = list1NodeEnd;
          break;
        }
      }
      break;
    } else {
      if (list1NodeEnd.next) {
        list1NodeEnd = list1NodeEnd.next;
        counter += 1;
      }
    }
  }

  let list1NodeStart = list1;
  counter = 0;
  while (true) {
    if (counter === a - 1) {
      list1NodeStart.next = null;
      list1NodeStart.next = list2;
      break;
    } else {
      if (list1NodeStart.next) {
        list1NodeStart = list1NodeStart.next;
        counter += 1;
      }
    }
  }

  return list1;
};

// * case 1
let list1 = new ListNode(
    0,
    new ListNode(
      1,
      new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
    )
  ),
  a = 3,
  b = 4,
  list2 = new ListNode(1000000, new ListNode(1000001, new ListNode(1000002)));
let result = mergeInBetween(list1, a, b, list2);

console.log(result.toString()); // [0,1,2,1000000,1000001,1000002,5]

// * case 2
list1 = new ListNode(
  0,
  new ListNode(
    1,
    new ListNode(
      2,
      new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6))))
    )
  )
);
a = 2;
b = 5;
list2 = new ListNode(
  1000000,
  new ListNode(
    1000001,
    new ListNode(1000002, new ListNode(1000003, new ListNode(1000005)))
  )
);
result = mergeInBetween(list1, a, b, list2); // [0,1,1000000,1000001,1000002,1000003,1000004,6]
console.log(result.toString());
