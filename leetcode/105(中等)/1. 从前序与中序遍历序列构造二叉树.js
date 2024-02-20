/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (preorder.length === 0) return null;

  const rootVal = preorder[0];
  const rootValIndexByInOrder = inorder.findIndex(i => i === rootVal);
  const left = inorder.slice(0, rootValIndexByInOrder);
  const leftMap = left.reduce((obj, cur) => {
    obj[cur] = true;
    return obj;
  }, {});
  const right = inorder.slice(rootValIndexByInOrder + 1);
  const rightMap = right.reduce((obj, cur) => {
    obj[cur] = true;
    return obj;
  }, {});
  const root = new TreeNode(
    rootVal,
    buildTree(preorder.filter(i => leftMap[i]), left),
    buildTree(preorder.filter(i => rightMap[i]), right)
  )
  return root;
};