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

ListNode *addTwoNumbers(ListNode *l1, ListNode *l2)
{
  ListNode *resultList = NULL;
  ListNode *p = NULL;
  ListNode *l1_head = new ListNode(l1->val, NULL);
  ListNode *l2_head = new ListNode(l2->val, NULL);

  int flag = 0;
  while (l1 || l2 || flag != 0)
  {
    int l1_val = 0, l2_val = 0;

    if (l1)
    {
      l1_val = l1->val;
    }

    if (l2)
    {
      l2_val = l2->val;
    }
    int sum = l1_val + l2_val;

    if (resultList)
    {
      p->next = new ListNode(sum % 10, NULL);
      p = p->next;
    }
    else
    {
      resultList = new ListNode(sum % 10, NULL);
      p = resultList;
    }

    if (sum + flag >= 10)
    {
      p->val = (sum + flag) % 10;
      flag = 1;
    }
    else
    {
      p->val = sum + flag;
      flag = 0;
    };

    if (l1)
    {
      l1 = l1->next;
    }

    if (l2)
    {
      l2 = l2->next;
    }
  }
  return resultList;
}

int main()
{
  // * case1
  // struct ListNode *list1_0 = new ListNode{3, NULL};
  // struct ListNode *list1_1 = new ListNode{4, list1_0};
  // struct ListNode *list1_2 = new ListNode{2, list1_1};

  // struct ListNode *list2_0 = new ListNode{4, NULL};
  // struct ListNode *list2_1 = new ListNode{6, list2_0};
  // struct ListNode *list2_2 = new ListNode{5, list2_1};

  // struct ListNode *result = addTwoNumbers(list1_2, list2_2);

  // * case12
  // struct ListNode *list1 = new ListNode{0, NULL};
  // struct ListNode *list2 = new ListNode{0, NULL};

  // struct ListNode *result = addTwoNumbers(list1, list2);

  // * case3
  ListNode *list1_0 = new ListNode(9, NULL);
  ListNode *list1_1 = new ListNode(9, list1_0);
  ListNode *list1_2 = new ListNode(9, list1_1);
  ListNode *list1_3 = new ListNode(9, list1_2);
  ListNode *list1_4 = new ListNode(9, list1_3);
  ListNode *list1_5 = new ListNode(9, list1_4);
  ListNode *list1_6 = new ListNode(9, list1_5);

  ListNode *list2_0 = new ListNode(9, NULL);
  ListNode *list2_1 = new ListNode(9, list2_0);
  ListNode *list2_2 = new ListNode(9, list2_1);
  ListNode *list2_3 = new ListNode(9, list2_2);

  ListNode *result = addTwoNumbers(list1_6, list2_3);

  ListNode *p = result;
  while (p)
  {
    cout << p->val << endl;
    p = p->next;
  }
}