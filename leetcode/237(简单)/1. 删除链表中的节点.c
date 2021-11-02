/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
#include "stdio.h"

struct ListNode
{
  int val;
  struct ListNode *next;
};

void deleteNode(struct ListNode *node)
{
  node->val = node->next->val;
  node->next = node->next->next;
}

int main()
{
  struct ListNode listNode4 = {9};
  struct ListNode listNode3 = {1, &listNode4};
  struct ListNode listNode2 = {5, &listNode3};
  struct ListNode listNode1 = {4, &listNode2};

  deleteNode(&listNode1);

  struct ListNode *p = &listNode1;

  while (p->next)
  {
    printf("%d", p->val);
    p = p->next;
  }
  return 0;
}