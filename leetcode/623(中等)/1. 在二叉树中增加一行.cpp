#include "iostream"
#include "queue"
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
  TreeNode *addOneRow(TreeNode *root, int val, int depth)
  {
    if (depth == 1)
    {
      return new TreeNode(val, root, nullptr);
    }

    dfs(root, val, depth, 1);
    return root;
  }

  void dfs(TreeNode *root, int val, int depth, int curDepth)
  {
    if (root == nullptr)
      return;

    if (curDepth == depth - 1)
    {
      TreeNode *l = new TreeNode(val, root->left, nullptr);
      root->left = l;

      TreeNode *r = new TreeNode(val, nullptr, root->right);
      root->right = r;

      return;
    }
    else
    {
      dfs(root->left, val, depth, curDepth + 1);
      dfs(root->right, val, depth, curDepth + 1);
    }
  }
};