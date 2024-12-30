/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSubPath = function (head, root) {
  const target = []
  let cur = head;
  while (cur) {
    target.push(cur.val);
    cur = cur.next;
  }
  return _isSubPath(root, [], target)
};

const _isSubPath = (root, path, target) => {
  if (root === null) return false;

  if (isContainArray([...path, root.val], target)) {
    return true;
  } else {
    return _isSubPath(root.left, [...path, root.val], target) || _isSubPath(root.right, [...path, root.val], target)
  }
}

const isContainArray = (arr1, arr2) => {
  return arr1.join('|').includes(arr2.join('|'))
}