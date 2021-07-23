/**
 * Definition for a binary tree node.
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var bstToGst = function (root) {
  
};

let input = null;

// input = new TreeNode(
//   4,
//   new TreeNode(
//     1,
//     new TreeNode(0, null, null),
//     new TreeNode(2, null, new TreeNode(3))
//   ),
//   new TreeNode(
//     6,
//     new TreeNode(5, null, null),
//     new TreeNode(7, null, new TreeNode(8))
//   )
// );

// const result = bstToGst(input);
// console.log(result);
