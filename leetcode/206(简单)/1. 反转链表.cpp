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
    ListNode *result = NULL, *current = head;

    while (current)
    {
      result = new ListNode(current->val, result);
      current = current->next;
    }

    return result;
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
}