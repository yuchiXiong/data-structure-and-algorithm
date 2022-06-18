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
  vector<int> inorderTraversal(TreeNode *root)
  {
    vector<int> results;
    if (root == nullptr)
      return results;
    _inorderTraversal(root, &results);
    return results;
  }

  void _inorderTraversal(TreeNode *root, vector<int> *list)
  {

    if (root->left)
      _inorderTraversal(root->left, list);
    list->push_back(root->val);
    if (root->right)
      _inorderTraversal(root->right, list);
  }
};

int main()
{

  TreeNode *tn = new TreeNode(1, new TreeNode(2, new TreeNode(4, nullptr, nullptr), new TreeNode(5, nullptr, nullptr)), new TreeNode(3, nullptr, nullptr));
  Solution *s = new Solution();

  vector<int> results = s->preorderTraversal(tn);

  for (int i = 0; i < results.size(); i++)
  {
    cout << results.at(i) << " ";
  }

  cout << endl;
}