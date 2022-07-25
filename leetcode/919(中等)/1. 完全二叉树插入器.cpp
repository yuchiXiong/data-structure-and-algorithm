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

class CBTInserter
{
public:
  TreeNode *head;
  TreeNode *nodes[2001];
  int size;

  CBTInserter(TreeNode *root)
  {
    head = root;
    nodes[1] = root;

    int i = 1, j = 2;
    while (true)
    {
      nodes[i]->left && (nodes[j++] = nodes[i]->left);
      nodes[i]->right && (nodes[j++] = nodes[i]->right);
      if (i + 1 == j)
      {
        break;
      }
      i++;
    }

    size = j;
  }

  int insert(int val)
  {
    TreeNode *parent = nodes[size / 2];
    TreeNode *cur = new TreeNode(val);

    parent->left != nullptr
        ? (parent->right = cur)
        : (parent->left = cur);
    nodes[size++] = cur;
    return nodes[(size - 1) / 2]->val;
  }

  TreeNode *get_root()
  {
    return head;
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
  CBTInserter *cbt = new CBTInserter(new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3, new TreeNode(6), nullptr)));

  // cout << cbt->get_root()->val << endl;
  cout << cbt->insert(7) << endl;
  cout << cbt->insert(8) << endl;
  // cout << cbt->insert(4) << endl;
  cout << cbt->get_root()->val << endl;
  // cout << cbt->get_root()->left->val << endl;
}