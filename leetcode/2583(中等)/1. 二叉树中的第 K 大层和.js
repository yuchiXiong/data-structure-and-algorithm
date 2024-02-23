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
 * @param {number} k
 * @return {number}
 */
var kthLargestLevelSum = function(root, k) {
  const result = getVal(root, k, 1, []);

  return result.sort((a, b) => b - a)[k - 1] || -1
};

const getVal = (root, k, cur, result) => {
  if (root === null) return [];
  let curLevelValue = result[cur] || 0;
  curLevelValue += root.val;
  result[cur] = curLevelValue;
  getVal(root.left, k, cur + 1, result);
  getVal(root.right, k, cur + 1, result);

  return result;
}