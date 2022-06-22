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
  int findBottomLeftValue(TreeNode *root)
  {

    if (root == nullptr)
      return {};

    TreeNode *queue[30000] = {};
    int len = 0, index = 0;
    queue[len++] = root;

    vector<vector<int>> results = {};
    results.push_back({});
    int resultIndex = 0;

    TreeNode *split = new TreeNode(-1001, nullptr, nullptr);

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
        resultIndex++;
        results.push_back({});
        index++;
        continue;
      }

      results[resultIndex].push_back(queue[index]->val);

      queue[len++] = queue[index]->left;
      queue[len++] = queue[index]->right;

      if (index == 0)
      {
        queue[len++] = split;
        resultIndex++;
        results.push_back({});
      }

      index++;
    } while (index + 1 < len);

    if (results[results.size() - 1].size() == 0)
      results.pop_back();

    return results[results.size() - 1 < 0 ? 0 : results.size() - 1][0];
  }
};