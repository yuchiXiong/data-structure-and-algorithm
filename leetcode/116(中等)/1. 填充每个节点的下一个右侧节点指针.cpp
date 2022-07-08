#include "iostream"
#include "deque"
using namespace std;

class Node
{
public:
  int val;
  Node *left;
  Node *right;
  Node *next;

  Node() : val(0), left(NULL), right(NULL), next(NULL) {}

  Node(int _val) : val(_val), left(NULL), right(NULL), next(NULL) {}

  Node(int _val, Node *_left, Node *_right, Node *_next)
      : val(_val), left(_left), right(_right), next(_next) {}
};

/*
// Definition for a Node.
class Node {
public:
    int val;
    Node* left;
    Node* right;
    Node* next;

    Node() : val(0), left(NULL), right(NULL), next(NULL) {}

    Node(int _val) : val(_val), left(NULL), right(NULL), next(NULL) {}

    Node(int _val, Node* _left, Node* _right, Node* _next)
        : val(_val), left(_left), right(_right), next(_next) {}
};
*/

class Solution
{
public:
  Node *connect(Node *root)
  {
    if (root == NULL)
      return root;

    deque<Node *> nodes;
    Node *cur = NULL;
    Node *split = new Node(-1001);
    nodes.push_back(root);
    nodes.push_back(split);

    while (nodes.front())
    {
      if (nodes.front()->val == -1001)
      {
        nodes.pop_front();
        if (nodes.size() == 0)
          return root;
        nodes.push_back(split);
        cur = NULL;
        continue;
      }
      else
      {
        nodes.push_back(nodes.front()->left);
        nodes.push_back(nodes.front()->right);
      }

      if (cur == NULL)
        cur = nodes.front();
      else
      {
        cur->next = nodes.front();
        cur = nodes.front();
      }

      nodes.pop_front();
    }

    return root;
  }
};