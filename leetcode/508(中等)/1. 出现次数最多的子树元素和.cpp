#include "iostream"
#include "map"
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
  map<int, int> hash;
  int maxCount = 1;
  vector<int> result;
  vector<int> findFrequentTreeSum(TreeNode *root)
  {
    _findFrequentTreeSum(root);
    return result;
  }

  int _findFrequentTreeSum(TreeNode *root)
  {
    if (root == nullptr)
      return 0;

    int current = root->val + _findFrequentTreeSum(root->left) + _findFrequentTreeSum(root->right);

    hash[current]++;

    if (hash[current] == maxCount)
    {
      result.push_back(current);
    }
    else if (hash[current] > maxCount)
    {
      result.clear();
      maxCount = hash[current];
      result.push_back(current);
    }

    return current;
  }
};

int main()
{

  // TreeNode *tn = new TreeNode(5, new TreeNode(2, nullptr, nullptr), new TreeNode(-5, nullptr, nullptr)); // [2]
  TreeNode *tn = new TreeNode(5, new TreeNode(2, nullptr, nullptr), new TreeNode(-3, nullptr, nullptr)); // [2, -3, 4]
  // TreeNode *tn = new TreeNode(
  //     88,
  //     new TreeNode(
  //         84,
  //         new TreeNode(
  //             79,
  //             new TreeNode(
  //                 64, new TreeNode(63, new TreeNode(62, new TreeNode(30, new TreeNode(27, new TreeNode(9, new TreeNode(3, new TreeNode(0, new TreeNode(-4, new TreeNode(-16, new TreeNode(-18, new TreeNode(-19), nullptr), new TreeNode(-7, new TreeNode(-23, new TreeNode(-42, new TreeNode(-59), nullptr), nullptr), nullptr)), nullptr), nullptr), nullptr), nullptr), nullptr), new TreeNode(59)), nullptr), nullptr),
  //                 new TreeNode(69)),
  //             nullptr),
  //         new TreeNode(87)),
  //     nullptr);
  Solution *s = new Solution();

  vector<int> results = s->findFrequentTreeSum(tn);

  for (int i = 0; i < results.size(); i++)
  {
    cout << results.at(i) << " ";
  }

  cout << endl;
}