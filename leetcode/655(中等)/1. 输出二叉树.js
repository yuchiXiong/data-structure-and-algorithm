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
 * @return {string[][]}
 */
var printTree = function (root) {
  if (!root) return [];

  const height = getLevel(root) - 1;

  const res = new Array(height + 1).fill(0).map(() => [...new Array(Math.pow(2, height + 1) - 1).fill('')]);
  _dfs(root, 0, res, height, 0);

  return res;
};

var getLevel = (root) => {
  if (!root) return 0;
  if (root.left === null && root.right === null) return 1;

  return Math.max(getLevel(root.left), getLevel(root.right)) + 1;
}

const _dfs = (root, level, res, height, pos) => {
  if (!root) return;

  if (level === 0) {
    const c = (Math.pow(2, height + 1) - 1 - 1) / 2;
    res[0][c] = root.val.toString();

    _dfs(root.left, level + 1, res, height, c - Math.pow(2, height - level - 1));
    _dfs(root.right, level + 1, res, height, c + Math.pow(2, height - level - 1));
  } else {
    res[level][pos] = root.val.toString();
    _dfs(root.left, level + 1, res, height, pos - Math.pow(2, height - level - 1));
    _dfs(root.right, level + 1, res, height, pos + Math.pow(2, height - level - 1));
  }
}