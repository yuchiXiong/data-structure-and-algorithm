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
  bool isSymmetric(TreeNode *root)
  {
    if (root->left == nullptr && root->right == nullptr)
      return true;

    return dfs(root->left, root->right);
  }

  bool dfs(TreeNode *tree1, TreeNode *tree2)
  {
    if (tree1 == nullptr && tree2 == nullptr)
      return true;

    if ((tree1 == nullptr && tree2 != nullptr) || (tree2 == nullptr && tree1 != nullptr))
      return false;

    if (tree1->val != tree2->val)
      return false;

    return dfs(tree1->left, tree2->right) && dfs(tree1->right, tree2->left);
  }
};

int main()
{
  TreeNode *tn = new TreeNode(
      1,
      new TreeNode(2, nullptr, new TreeNode(3)),
      new TreeNode(2, nullptr, new TreeNode(3)));

  Solution *s = new Solution();
  cout << (s->isSymmetric(tn) ? "true" : "false") << endl;
}