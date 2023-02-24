/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (preorder.length === 0 || inorder.length === 0) return null;

  const rootVal = preorder.shift();
  const rootIndex = inorder.findIndex(i => i === rootVal);
  const leftInorder = inorder.slice(0, rootIndex);
  const rightInorder = inorder.slice(rootIndex + 1, inorder.length);

  const leftPreorder = preorder.slice(0, leftInorder.length);
  const rightPreorder = preorder.slice(leftInorder.length, preorder.length);
  return new TreeNode(rootVal, buildTree(leftPreorder, leftInorder), buildTree(rightPreorder, rightInorder))
};