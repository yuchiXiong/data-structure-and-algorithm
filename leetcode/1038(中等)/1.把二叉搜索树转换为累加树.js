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
  const sortedList = [];
  dfs(root, sortedList);

  const sumResult = [];
  for (let i = sortedList.length - 1; i >= 0; i--) {
    if (i === sortedList.length - 1) {
      sumResult[i] = sortedList[i];
      continue;
    }
    sumResult[i] = sumResult[i + 1] + sortedList[i];
  }

  setTree(root, sumResult);

  return root;
};

const setTree = (root, result) => {
  if (!root) return;

  if (root.left) setTree(root.left, result);
  root.val = result.shift();
  if (root.right) setTree(root.right, result);
}

const dfs = (root, arr) => {
  if (!root) return;

  if (root.left) dfs(root.left, arr);
  arr.push(root.val);
  if (root.right) dfs(root.right, arr);
}


let input = null;

input = new TreeNode(
  4,
  new TreeNode(
    1,
    new TreeNode(0, null, null),
    new TreeNode(2, null, new TreeNode(3))
  ),
  new TreeNode(
    6,
    new TreeNode(5, null, null),
    new TreeNode(7, null, new TreeNode(8))
  )
);

const result = bstToGst(input);
console.log(result);
