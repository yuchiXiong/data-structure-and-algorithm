#include "iostream"
using namespace std;

/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
struct TreeNode
{
  int val;
  TreeNode *left;
  TreeNode *right;
  TreeNode() : val(0), left(nullptr), right(nullptr) {}
  TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
  TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
};

class Solution
{
public:
  int sums[10000];
  int maxDepth = 1;
  int deepestLeavesSum(TreeNode *root)
  {
    _dfs(root, 1);

    return sums[maxDepth];
  }

  void _dfs(TreeNode *root, int depth)
  {
    if (root == nullptr)
      return;

    maxDepth = maxDepth > depth ? maxDepth : depth;

    sums[depth] += root->val;
    _dfs(root->left, depth + 1);
    _dfs(root->right, depth + 1);
  }
};