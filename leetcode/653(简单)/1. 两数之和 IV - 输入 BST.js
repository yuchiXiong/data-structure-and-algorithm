/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function (root, k) {
  return dfs(root, k, {});
};

const dfs = (root, k, hash) => {

  if (root === null) return false;

  if (hash[k - root.val] === 1) return true;
  hash[root.val] = 1;
  const l = dfs(root.left, k, hash);
  if (l) return l;
  const r = dfs(root.right, k, hash);
  if (r) return r;

  return false;
}