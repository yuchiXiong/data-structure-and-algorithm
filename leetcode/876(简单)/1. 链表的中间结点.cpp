#include "iostream"
using namespace std;
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
  ListNode *middleNode(ListNode *head)
  {
    ListNode *current = head;
    ListNode *slow_current = head;

    while (current != nullptr)
    {
      current = current->next;
      if (current != nullptr)
      {
        current = current->next;
        slow_current = slow_current->next;
      }
    }
    return slow_current;
  }
};