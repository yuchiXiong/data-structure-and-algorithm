#include "iostream"
using namespace std;

/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
struct ListNode
{
  int val;
  ListNode *next;
  ListNode() : val(0), next(nullptr) {}
  ListNode(int x) : val(x), next(nullptr) {}
  ListNode(int x, ListNode *next) : val(x), next(next) {}
};

class Solution
{
public:
  ListNode *partition(ListNode *head, int x)
  {
    ListNode *p1 = new ListNode(-1), *_p1 = p1;
    ListNode *p2 = new ListNode(-1), *_p2 = p2;
    ListNode *p = head;

    while (p != nullptr)
    {
      if (p->val < x)
      {
        _p1->next = new ListNode(p->val);
        _p1 = _p1->next;
      }
      else
      {
        _p2->next = new ListNode(p->val);
        _p2 = _p2->next;
      }
      p = p->next;
    }

    _p1->next = p2->next;

    return p1->next;
  }
};

int main()
{
  Solution s;
  ListNode *head = new ListNode(1, new ListNode(4, new ListNode(3, new ListNode(2, new ListNode(5, new ListNode(2))))));
  ListNode *p = s.partition(head, 3);
  while (p)
  {
    cout << p->val << " ";
    p = p->next;
  }
  cout << endl;
  return 0;
}