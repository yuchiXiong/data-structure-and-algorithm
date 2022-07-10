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
  TreeNode *insertIntoBST(TreeNode *root, int val)
  {
    if (root == nullptr)
      return new TreeNode(val);

    _dfs(root, val);

    return root;
  }

  void _dfs(TreeNode *root, int val)
  {
    if (root == nullptr)
      return;

    if (root->val > val)
    {
      if (root->left == nullptr)
      {
        root->left = new TreeNode(val);
      }
      else
      {
        _dfs(root->left, val);
      }
    }
    else
    {
      if (root->right == nullptr)
      {
        root->right = new TreeNode(val);
      }
      else
      {
        _dfs(root->right, val);
      }
    }
  }
};