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
  ListNode *removeElements(ListNode *head, int val)
  {
    if ((head == NULL) || (head->next == NULL && head->val == val))
      return NULL;

    ListNode *current = head->next, *pre = head;

    while (current != NULL)
    {
      if (current->val == val)
      {
        current = current->next;
        pre->next = pre->next->next;
      }
      else
      {
        current = current->next;
        pre = pre->next;
      }
    }

    if (head->val == val)
      head = head->next;

    return head;
  }

  void case1()
  {
    ListNode *l1 = new ListNode(1);
    ListNode *l2 = new ListNode(2);
    ListNode *l3 = new ListNode(3);
    ListNode *l4 = new ListNode(4);
    ListNode *l5 = new ListNode(5);
    ListNode *l6 = new ListNode(6);

    l1->next = l2;
    l2->next = l3;
    l3->next = l4;
    l4->next = l5;
    l5->next = l6;

    ListNode *current = l1;
    while (current != NULL)
    {
      cout << current->val << " ";
      current = current->next;
    }

    cout << endl;

    current = removeElements(l1, 6);

    while (current != NULL)
    {
      cout << current->val << " ";
      current = current->next;
    }

    cout << endl;
  }

  void case2()
  {
    ListNode *current = removeElements(NULL, 1);

    while (current != NULL)
    {
      cout << current->val << " ";
      current = current->next;
    }

    cout << endl;
  }

  void case3()
  {
    ListNode *l1 = new ListNode(7);
    ListNode *l2 = new ListNode(7);
    ListNode *l3 = new ListNode(7);
    ListNode *l4 = new ListNode(7);

    l1->next = l2;
    l2->next = l3;
    l3->next = l4;

    ListNode *current = l1;
    while (current != NULL)
    {
      cout << current->val << " ";
      current = current->next;
    }

    cout << endl;

    current = removeElements(l1, 7);

    while (current != NULL)
    {
      cout << current->val << " ";
      current = current->next;
    }

    cout << endl;
  }
};

int main()
{
  Solution *s = new Solution();

  s->case1();
  s->case2();
  s->case3();
}