#include "iostream"
using namespace std;

/** Definition for singly-linked list. */
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
  ListNode *reverseList(ListNode *head)
  {
    if (head == NULL || head->next == NULL)
      return head;

    ListNode *last = reverseList(head->next);
    head->next->next = head;
    head->next = NULL;

    return last;
  }

  ListNode *reverseList2(ListNode *head)
  {
    ListNode *current = head->next;
    ListNode *p = head;

    while (current)
    {
      ListNode *next = current->next;
      current->next = p;
      if (p == head)
        p->next = NULL;
      p = current;
      current = next;
    }

    return p;
  }

  void case1()
  {
    ListNode *l1 = new ListNode(1);
    ListNode *l2 = new ListNode(2);
    ListNode *l3 = new ListNode(3);
    ListNode *l4 = new ListNode(4);
    ListNode *l5 = new ListNode(5);

    l1->next = l2;
    l2->next = l3;
    l3->next = l4;
    l4->next = l5;

    ListNode *result = reverseList(l1);

    while (result != NULL)
    {
      cout << result->val << " ";
      result = result->next;
    }

    cout << endl;
  }

  void case2()
  {
    ListNode *l1 = new ListNode(1);
    ListNode *l2 = new ListNode(2);
    l1->next = l2;

    ListNode *result = reverseList(l1);

    while (result != NULL)
    {
      cout << result->val << " ";
      result = result->next;
    }

    cout << endl;
  }
};

int main()
{
  Solution *s = new Solution();

  s->case1();
  s->case2();
}