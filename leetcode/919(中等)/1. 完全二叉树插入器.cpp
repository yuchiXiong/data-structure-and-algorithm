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

class CBTInserter
{
public:
  TreeNode *_root;
  CBTInserter(TreeNode *root)
  {
    _root = root;
  }

  int insert(int val)
  {
    TreeNode *nodes[1002];
    nodes[1] = _root;

    int i = 1, j = 2;
    while (true)
    {
      nodes[j++] = nodes[i]->left;
      nodes[j++] = nodes[i]->right;
      if (nodes[i + 1] == NULL)
      {
        TreeNode *parent = nodes[(i + 1) / 2];
        parent->left != NULL
            ? (parent->right = new TreeNode(val))
            : (parent->left = new TreeNode(val));
        break;
      }
      i++;
    }

    return nodes[(i + 1) / 2]->val;
  }

  TreeNode *get_root()
  {
    return _root;
  }
};

/**
 * Your CBTInserter object will be instantiated and called as such:
 * CBTInserter* obj = new CBTInserter(root);
 * int param_1 = obj->insert(val);
 * TreeNode* param_2 = obj->get_root();
 */
int main()
{
  CBTInserter *cbt = new CBTInserter(new TreeNode(1));

  // cout << cbt->get_root()->val << endl;
  cout << cbt->insert(2) << endl;
  cout << cbt->get_root()->val << endl;
  cout << cbt->get_root()->left->val << endl;
}