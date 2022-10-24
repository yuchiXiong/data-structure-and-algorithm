/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var evaluateTree = function (root) {
  switch (root.val) {
    case 2:
      return evaluateTree(root.left) || evaluateTree(root.right);
    case 3:
      return evaluateTree(root.left) && evaluateTree(root.right);
    case 0:
      return false;
    case 1:
      return true;
  }
};