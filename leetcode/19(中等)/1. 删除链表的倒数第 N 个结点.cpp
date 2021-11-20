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
    ListNode *p = head;
    int count = 0;
    int size = 0;
    while (p)
    {
      p = p->next;
      size++;
    }

    if (size == 1)
      return NULL;

    p = head;
    int target = size - n - 1;
    if (target < 0)
    {
      p = p->next;
      return p;
    }
    while (p)
    {

      if (count == target)
      {
        p->next = p->next->next;
        break;
      }
      p = p->next;
      count++;
    }
    return head;
  }
};

int main()
{
  Solution *s = new Solution();

  ListNode *l1 = new ListNode(5, NULL);
  ListNode *l2 = new ListNode(4, l1);
  ListNode *l3 = new ListNode(3, l2);
  ListNode *l4 = new ListNode(2, l3);
  ListNode *l5 = new ListNode(1, l4);

  ListNode *l = s->removeNthFromEnd(l5, 2); // 1 2 3 5

  // ListNode *l1 = new ListNode(1, NULL);

  // ListNode *l = s->removeNthFromEnd(l1, 1); // []

  // ListNode *l1 = new ListNode(2, NULL);
  // ListNode *l2 = new ListNode(1, l1);

  // ListNode *l = s->removeNthFromEnd(l2, 1); // 1
  // ListNode *l = s->removeNthFromEnd(l2, 2); // 2

  ListNode *p = l;
  while (p)
  {
    cout << p->val << endl;
    p = p->next;
  }
}