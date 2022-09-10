function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

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
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
var trimBST = function (root, low, high) {
  if (root === null) {
    return null;
  }

  if (root.val < low) return trimBST(root.right, low, high);
  if (root.val > high) return trimBST(root.left, low, high);

  root.left = trimBST(root.left, low, high);
  root.right = trimBST(root.right, low, high);

  return root;
};

// console.log(trimBST(new TreeNode(1, new TreeNode(0), new TreeNode(2)), 1, 2)); // [1, null, 2]
// console.log(trimBST(new TreeNode(3, new TreeNode(0, null, new TreeNode(2, new TreeNode(1))), new TreeNode(4)), 1, 3)); // [3, 2, null, 1]
console.log(trimBST(new TreeNode(3, new TreeNode(1, null, new TreeNode(2)), new TreeNode(4)), 3, 4)); // [3,null,4]