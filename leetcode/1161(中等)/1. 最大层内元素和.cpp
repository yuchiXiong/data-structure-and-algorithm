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
  int maxLevelSum(TreeNode *root)
  {
    TreeNode *q[21000];
    int left = 0, right = 0;
    int curSum = 0;
    int maxSum = root->val;
    int curIndex = 1;
    int minIndex = 1;

    TreeNode *split = new TreeNode(-100001);
    q[0] = root;
    q[1] = split;
    right = 2;

    while (left <= right)
    {

      if (left == right - 1 && q[left] == split)
        break;
      if (q[left] == split)
      {
        left++;
        q[right++] = split;
        if (curSum > maxSum)
        {
          maxSum = curSum;
          minIndex = curIndex;
        }
        curSum = 0;
        curIndex++;
        continue;
      }

      if (q[left] == nullptr)
      {
        left++;
        continue;
      }

      curSum += q[left]->val;
      q[right++] = q[left]->left;
      q[right++] = q[left]->right;
      left++;
    }

    return minIndex;
  }
};