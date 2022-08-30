#include "iostream"
using namespace std;

struct ListNode
{
  int val;
  ListNode *next;
  ListNode() : val(0), next(nullptr) {}
  ListNode(int x) : val(x), next(nullptr) {}
  ListNode(int x, ListNode *next) : val(x), next(next) {}
};

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
class Solution
{
public:
  ListNode *p;
  ListNode *reverseBetween(ListNode *head, int left, int right)
  {
    if (left == 1)
    {
      return reverseList(head, right);
    }

    head->next = reverseBetween(head->next, left - 1, right - 1);
    return head;
  }

  ListNode *reverseList(ListNode *head, int n)
  {
    if (n == 1)
    {
      p = head->next;
      return head;
    }

    ListNode *last = reverseList(head->next, n - 1);
    head->next->next = head;
    head->next = p;

    return last;
  }

  ListNode *reverseList(ListNode *head)
  {
    if (head == NULL || head->next == NULL)
      return head;

    ListNode *last = reverseList(head->next);
    head->next->next = head;
    head->next = NULL;

    return last;
  }
};