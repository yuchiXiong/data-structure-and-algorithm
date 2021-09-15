//  Definition for a binary tree node.
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function (root, k) {
  let all = [];
  all.push(root.val);
  if (root.left) {
    all.push(...kthLargest(root.left, null));
  }
  if (root.right) {
    all.push(...kthLargest(root.right, null));
  }
  if (k !== null) {
    return all.sort().reverse()[k - 1];
  } else {
    return all;
  }
};

let root = new TreeNode(3);
root.left = new TreeNode(1);
root.right = new TreeNode(4);
root.left.right = new TreeNode(2);
let k = 1;

console.log(kthLargest(root, k)); // 4

// root = [5, 3, 6, 2, 4, null, null, 1];
root = new TreeNode(5);
root.left = new TreeNode(3);
root.right = new TreeNode(6);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(4);
root.left.left.left = new TreeNode(1);
k = 3;

console.log(kthLargest(root, k)); // 4
