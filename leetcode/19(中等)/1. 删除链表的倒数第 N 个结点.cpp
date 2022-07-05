#include <iostream>
using namespace std;

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
  ListNode *removeNthFromEnd(ListNode *head, int n)
  {
    if (head == nullptr)
      return nullptr;

    if (head->next == nullptr)
      return nullptr;

    if ((head->next->next == nullptr) && (n == 2))
      return head->next;
    else if ((head->next->next == nullptr) && (n == 1))
    {
      head->next = nullptr;
      return head;
    }

    ListNode *p = head;
    ListNode *s_p = nullptr;

    int i = 0;
    while (p != nullptr)
    {
      i++;
      p = p->next;

      if (i == n + 1)
      {
        s_p = head;
      }
      else if (i > n)
      {
        s_p = s_p->next;
      }
    }

    if (s_p == nullptr)
    {
      return head->next;
    }
    else
      s_p->next = s_p->next->next;

    return head;
  }
};