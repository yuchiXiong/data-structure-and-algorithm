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
  vector<int> largestValues(TreeNode *root)
  {
    vector<int> results = {};

    if (root == nullptr)
      return results;

    TreeNode *queue[20031] = {};
    int len = 0, index = 0, max = 114514;
    queue[len++] = root;

    TreeNode *split = new TreeNode(-1001);
    do
    {
      if (queue[index] == nullptr)
      {
        index++;
        continue;
      }

      if (queue[index]->val == -1001)
      {
        queue[len++] = split;
        index++;
        results.push_back(max);
        max = 114514;

        continue;
      }

      max = (max < queue[index]->val || max == 114514) ? queue[index]->val : max;

      queue[len++] = queue[index]->left;
      queue[len++] = queue[index]->right;

      if (index == 0)
      {
        queue[len++] = split;
        results.push_back(max);
        max = 114514;
      }

      index++;
    } while (index + 1 < len);

    return results;
  }
};

int main()
{
  // [1,3,2,5,3,null,9]
  // TreeNode *tn = new TreeNode(1, new TreeNode(3, new TreeNode(5), new TreeNode(3)), new TreeNode(2, nullptr, new TreeNode(9)));
  // [0,null,-1]
  TreeNode *tn = new TreeNode(0, nullptr, new TreeNode(-1));

  Solution *s = new Solution();
  vector<int> v = s->largestValues(tn);

  for (int i = 0; i < v.size(); i++)
  {
    cout << v[i] << " ";
  }

  cout << endl;
}