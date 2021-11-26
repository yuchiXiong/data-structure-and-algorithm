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
  ListNode *deleteDuplicates(ListNode *head)
  {
    ListNode *current = head;
    while (current)
    {
      if (current->next == NULL)
        break;
      if (current->val == current->next->val)
      {
        current->next = current->next->next;
      }
      else
      {
        current = current->next;
      }
    }
    return head;
  }
};

int main()
{
  Solution *solution = new Solution();
  // case1: 1->1->2
  ListNode *l3 = new ListNode(2, NULL);
  ListNode *l2 = new ListNode(1, l3);
  ListNode *l1 = new ListNode(1, l2);

  // case2: 1->1->2->3->3
  // ListNode *l5 = new ListNode(3, NULL);
  // ListNode *l4 = new ListNode(3, l5);
  // ListNode *l3 = new ListNode(2, l4);
  // ListNode *l2 = new ListNode(1, l3);
  // ListNode *l1 = new ListNode(1, l2);

  // case3: 1->1->1
  // ListNode *l3 = new ListNode(1, NULL);
  // ListNode *l2 = new ListNode(1, l3);
  // ListNode *l1 = new ListNode(1, l2);

  ListNode *result1 = solution->deleteDuplicates(l1);

  ListNode *current = result1;
  while (current)
  {
    cout << current->val << endl;
    current = current->next;
  }
  // case2: 1->1->2->3->3
}