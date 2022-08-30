// ! 这题使用的是LeetCode25的思路直接改了下代码
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution
{
public:
  ListNode *swapPairs(ListNode *head)
  {
    return reverseKGroup(head, 2);
  }
  ListNode *p;
  Solution()
  {
    p = NULL;
  }
  ListNode *reverseKGroup(ListNode *head, int k)
  {
    ListNode *cur = head;
    for (int i = 1; i <= k; i++)
    {
      if (cur == NULL)
        return head;
      cur = cur->next;
    }
    ListNode *last = reverseList(head, k);

    head->next = reverseKGroup(head->next, k);

    return last;
  }

  ListNode *reverseList(ListNode *head, int n)
  {
    if (n == 1)
    {
      p = head->next;
      return head;
    }

    ListNode *last = reverseList(head->next, n - 1);
    head->next->next = head;
    head->next = p;

    return last;
  }
};
