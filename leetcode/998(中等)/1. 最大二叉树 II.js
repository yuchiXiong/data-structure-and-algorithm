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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoMaxTree = function (root, val) {
  const origin = dfs(root);

  origin.push(val);
  console.log(origin)
  return gen(origin, 0, origin.length - 1);
};

const dfs = (root) => {
  if (root === null) return [];
  return [...dfs(root.left), root.val, ...dfs(root.right)]
}

const gen = (arr, start, end) => {
  console.log(start, end)
  if (start > end) return null;
  if (start === end) return new TreeNode(arr[start], null, null);
  let max = arr[start];
  let maxIndex = start;
  for (let i = start; i <= end; i++) {
    if (arr[i] > max) {
      max = arr[i];
      maxIndex = i;
    }
  }

  return new TreeNode(max, gen(arr, start, maxIndex - 1), gen(arr, maxIndex + 1, end));
}

const tn1 = new TreeNode(4, new TreeNode(1, null, null), new TreeNode(3, new TreeNode(2), null))
console.log(insertIntoMaxTree(tn1, 5))