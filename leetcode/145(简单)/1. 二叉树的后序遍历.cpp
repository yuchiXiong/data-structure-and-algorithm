#include "iostream"
#include "vector"
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
  vector<int> postorderTraversal(TreeNode *root)
  {
    vector<int> results;
    if (root == nullptr)
      return results;
    _postorderTraversal(root, &results);
    return results;
  }

  void _postorderTraversal(TreeNode *root, vector<int> *list)
  {
    if (root->left)
      _postorderTraversal(root->left, list);
    if (root->right)
      _postorderTraversal(root->right, list);
    list->push_back(root->val);
  }
};

int main()
{

  TreeNode *tn = new TreeNode(1, nullptr, new TreeNode(3, nullptr, nullptr));
  Solution *s = new Solution();

  vector<int> results = s->preorderTraversal(tn);

  for (int i = 0; i < results.size(); i++)
  {
    cout << results.at(i) << " ";
  }

  cout << endl;
}