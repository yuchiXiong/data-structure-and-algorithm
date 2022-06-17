#include "iostream"
using namespace std;

/** Definition for singly-linked list. */
struct ListNode
{
  int val;
  ListNode *next;
  ListNode(int x) : val(x), next(NULL) {}
};

class Solution
{
public:
  bool hasCycle(ListNode *head)
  {

    if (head == NULL)
      return false;

    ListNode *fast = head->next;
    ListNode *slow = head;

    while (fast != NULL && fast->next != NULL)
    {
      if (fast == slow)
        return true;
      else
      {
        fast = fast->next->next;
        slow = slow->next;
      }
    }

    return false;
  }
};

int main()
{
  Solution *s = new Solution();

  ListNode *l1 = new ListNode(3);
  ListNode *l2 = new ListNode(2);
  ListNode *l3 = new ListNode(0);
  ListNode *l4 = new ListNode(4);

  l1->next = l2;
  l2->next = l3;
  l3->next = l4;
  l4->next = l2;

  cout << (s->hasCycle(l1) ? "true" : "false") << endl;

  ListNode *l5 = new ListNode(1);
  ListNode *l6 = new ListNode(2);

  l5->next = l6;
  l6->next = l5;

  cout << (s->hasCycle(l5) ? "true" : "false") << endl;

  ListNode *l7 = new ListNode(1);

  cout << (s->hasCycle(l7) ? "true" : "false") << endl;

  ListNode *l8 = new ListNode(1);
  ListNode *l9 = new ListNode(2);

  l8->next = l9;

  cout << (s->hasCycle(l8) ? "true" : "false") << endl;
}