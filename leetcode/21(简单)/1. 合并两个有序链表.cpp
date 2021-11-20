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
  ListNode *mergeTwoLists(ListNode *l1, ListNode *l2)
  {
    ListNode *result = NULL;
    ListNode *p = NULL;
    while (l1 || l2)
    {
      int val;
      if (l1 && l2)
      {
        if (l1->val > l2->val)
        {
          val = l2->val;
          l2 = l2->next;
        }
        else
        {
          val = l1->val;
          l1 = l1->next;
        }
      }
      else
      {
        if (l1)
        {
          val = l1->val;
          l1 = l1->next;
        }
        else
        {
          val = l2->val;
          l2 = l2->next;
        }
      }

      if (result)
      {
        p->next = new ListNode(val, NULL);
        p = p->next;
      }
      else
      {
        result = new ListNode(val, NULL);
        p = result;
      }
    }
    return result;
  }
};

int main()
{
  Solution *s = new Solution();

  // * case1
  // ListNode *l1_1 = new ListNode(4, NULL);
  // ListNode *l1_2 = new ListNode(2, l1_1);
  // ListNode *l1_3 = new ListNode(1, l1_2);

  // ListNode *l2_1 = new ListNode(4, NULL);
  // ListNode *l2_2 = new ListNode(3, l2_1);
  // ListNode *l2_3 = new ListNode(1, l2_2);

  // ListNode *result = s->mergeTwoLists(l1_3, l2_3); // 1 1 2 3 4 4

  // * case2
  // ListNode *result = s->mergeTwoLists(NULL, NULL); // []

  // * case3
  ListNode *l3 = new ListNode(0, NULL);

  ListNode *result = s->mergeTwoLists(NULL, l3);

  ListNode *p = result;
  while (p)
  {
    cout << p->val << endl;
    p = p->next;
  }
}