#include "iostream"
#include "math.h"
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
  vector<vector<int>> levelOrder(TreeNode *root)
  {
    if (root == nullptr)
      return {};

    TreeNode *queue[4000] = {};
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

    return results;
  }
};
int main()
{

  // [[3],[9,20],[15,7]]
  // TreeNode *tn = new TreeNode(3, new TreeNode(9, nullptr, nullptr), new TreeNode(20, new TreeNode(15, nullptr, nullptr), new TreeNode(7, nullptr, nullptr)));

  // [[1],[2]
  // TreeNode *tn = new TreeNode(1, new TreeNode(2, nullptr, nullptr), nullptr);

  // [1 ][2 3 ][4 5 ]
  // TreeNode *tn = new TreeNode(1,
  //                             new TreeNode(2,
  //                                          new TreeNode(4, nullptr, nullptr),
  //                                          new TreeNode(5, nullptr, nullptr)),
  //                             new TreeNode(3, nullptr, nullptr));

  // [[1],[2],[3],[4],[5],[6],[7],[8]]
  TreeNode *tn = new TreeNode(1,
                              new TreeNode(2,
                                           new TreeNode(3,
                                                        new TreeNode(4,
                                                                     new TreeNode(5,
                                                                                  new TreeNode(6,
                                                                                               new TreeNode(7,
                                                                                                            new TreeNode(8,
                                                                                                                         nullptr,
                                                                                                                         nullptr),
                                                                                                            nullptr),
                                                                                               nullptr),
                                                                                  nullptr),
                                                                     nullptr),
                                                        nullptr),
                                           nullptr),
                              nullptr);

  // []
  // TreeNode *tn = nullptr;

  // [[2 ][3 ][4 ][5 ][6 ]]
  // TreeNode *tn = new TreeNode(2,
  //                             nullptr,
  //                             new TreeNode(3,
  //                                          nullptr,
  //                                          new TreeNode(4,
  //                                                       nullptr,
  //                                                       new TreeNode(5,
  //                                                                    nullptr,
  //                                                                    new TreeNode(6,
  //                                                                                 nullptr,
  //                                                                                 nullptr)))));

  Solution *s = new Solution();

  vector<vector<int>> results = s->levelOrder(tn);

  for (int i = 0; i < results.size(); i++)
  {
    cout << '[';
    for (int j = 0; j < results[i].size(); j++)
      cout << results[i][j] << " ";
    cout << ']';
  }

  cout << endl;
}