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
  bool hasPathSum(TreeNode *root, int targetSum)
  {
    return _hasPathSum(root, targetSum, 0);
  }

  bool _hasPathSum(TreeNode *root, int targetSum, int sum)
  {
    if (root == nullptr)
      return false;

    if (root->val + sum == targetSum && root->left == nullptr && root->right == nullptr)
      return true;

    if (_hasPathSum(root->left, targetSum, sum + root->val))
      return true;
    if (_hasPathSum(root->right, targetSum, sum + root->val))
      return true;

    return false;
  }
};

int main()
{

  TreeNode *tn = new TreeNode(1, new TreeNode(2), nullptr);

  Solution *s = new Solution();
  cout << (s->hasPathSum(tn, 20) ? "true" : "false") << endl;
}