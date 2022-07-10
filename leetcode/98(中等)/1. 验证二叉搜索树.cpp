#include "iostream"
using namespace std;

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
  int pre;
  Solution() { pre = -114514; }
  bool isValidBST(TreeNode *root)
  {
    if (root->left == nullptr && root->right == nullptr)
      return true;

    if (!_dfs(root))
      return false;

    return true;
  }

  bool _dfs(TreeNode *root)
  {
    if (root == nullptr)
      return true;
    if (!_dfs(root->left))
      return false;

    if (pre == -114514)
      pre = root->val;
    else
    {
      if (pre >= root->val)
        return false;
      pre = root->val;
    }
    if (!_dfs(root->right))
      return false;

    return true;
  }
};
