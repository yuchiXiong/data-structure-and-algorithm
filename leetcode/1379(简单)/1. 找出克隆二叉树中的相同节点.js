/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function(original, cloned, target) {

  const result = treeFind(cloned, (val) => {
      return val === target.val;
  });

  return result;
};

const treeFind = (tree, callback) => {
  if (tree === null) return;

  if (callback(tree.val)) return tree;

  const leftResult = treeFind(tree.left, callback);
  const rightResult = treeFind(tree.right, callback);

  return leftResult || rightResult
}