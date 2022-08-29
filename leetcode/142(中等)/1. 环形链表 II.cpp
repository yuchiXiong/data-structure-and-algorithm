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
  ListNode *detectCycle(ListNode *head)
  {
    if (head == NULL || head->next == NULL)
      return NULL;
    if (head->next == NULL || head->next == head)
      return head;

    if (head->next->next == head)
      return head;

    ListNode *slow = head->next;
    ListNode *fast = head->next->next;
    bool isCycle = false;

    while (fast && fast->next)
    {
      if (fast == slow)
      {
        if (isCycle)
          return slow;

        slow = head;
        isCycle = true;
        continue;
      }

      if (isCycle)
      {
        slow = slow->next;
        fast = fast->next;
      }
      else
      {
        slow = slow->next;
        fast = fast->next->next;
      }
    }

    return NULL;
  }
};

int main()
{
  ListNode *p1 = new ListNode(3);
  ListNode *p2 = new ListNode(2);
  ListNode *p3 = new ListNode(0);
  ListNode *p4 = new ListNode(4);

  p1->next = p2;
  p2->next = p3;
  p3->next = p4;
  p4->next = p2;

  Solution s;
  cout << (s.detectCycle(p1) == NULL ? "is null" : "not null") << endl;
  cout << s.detectCycle(p1)->val << endl;
}