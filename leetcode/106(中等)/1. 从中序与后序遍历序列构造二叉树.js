/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  if (postorder.length === 0) return null;
  
      const rootVal = postorder[postorder.length - 1];
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
          buildTree(left, postorder.filter(i => leftMap[i])), 
          buildTree(right, postorder.filter(i => rightMap[i]))
      )
      return root;
  };