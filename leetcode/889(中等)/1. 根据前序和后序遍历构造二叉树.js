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
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var constructFromPrePost = function(preorder, postorder) {
  if (preorder.length === 0) return null;

  const rootVal = preorder[0];
  const leftVal = preorder[1];
  const leftIndexByPost = postorder.findIndex(i => i === leftVal);
  const leftPost = postorder.slice(0, leftIndexByPost + 1);
  const rightPost = postorder.slice(leftIndexByPost + 1, postorder.length - 1); 

  return new TreeNode(
      rootVal,
      constructFromPrePost(preorder.filter(i => leftPost.includes(i)), leftPost),
      constructFromPrePost(preorder.filter(i => rightPost.includes(i)), rightPost)
  );
};