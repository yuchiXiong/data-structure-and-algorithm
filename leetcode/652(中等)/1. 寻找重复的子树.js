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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function (root) {

  const res = {};
  const cache = {};
  dfs(root, cache, res)

  return Object.values(res);
};

const dfs = (root, cache = {}, res = {}) => {
  if (root === null) return '';

  const leftGraph = dfs(root.left, cache, res) || 'emptyL';
  const rightGraph = dfs(root.right, cache, res) || 'emptyR';
  const key = `${root.val}-${leftGraph}--|--${rightGraph}`;

  if (cache[key]) {
    res[key] = root;
  }

  cache[key] = root;
  return key;
}

const tn = new TreeNode(1, new TreeNode(2, new TreeNode(4)), new TreeNode(3, new TreeNode(2, new TreeNode(4)), new TreeNode(4)));

console.log(findDuplicateSubtrees(tn)); // [[2,4],[4]]

const tn1 = new TreeNode(0, new TreeNode(0, new TreeNode(0)), new TreeNode(0, null, new TreeNode(0, null, new TreeNode(0))));

console.log(findDuplicateSubtrees(tn1)); // [[0]]