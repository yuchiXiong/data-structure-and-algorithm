#include "iostream"
using namespace std;

struct ListNode
{
  int val;
  ListNode *next;
  ListNode(int x) : val(x), next(NULL) {}
};

/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
class Solution
{
public:
  ListNode *getKthFromEnd(ListNode *head, int k)
  {
    ListNode *fast = head;
    ListNode *slow = head;
    int i = 1;

    while (fast)
    {
      fast = fast->next;
      if (i < k - 1)
      {
        i++;
      }
      else
      {
        slow = slow->next;
      }
    }

    return slow;
  }
};