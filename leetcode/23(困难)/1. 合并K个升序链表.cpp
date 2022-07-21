
#include "iostream"
#include "queue"
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

struct cmp
{
  bool operator()(const ListNode *node1, const ListNode *node2)
  {
    return node1->val >= node2->val;
  }
};

class Solution
{
public:
  ListNode *mergeKLists(vector<ListNode *> &lists)
  {
    priority_queue<ListNode *, vector<ListNode *>, cmp> pq;

    for (int i = 0; i < lists.size(); i++)
    {
      ListNode *p = lists[i];
      while (p)
      {
        pq.push(p);
        p = p->next;
      }
    }

    ListNode *ans = new ListNode(-1, nullptr);
    ListNode *p = ans;
    while (pq.size() != 0)
    {
      p->next = pq.top();
      p = p->next;
      p->next = nullptr;
      pq.pop();
    }

    return ans->next;
  }
};

int main()
{
  ListNode *l1 = new ListNode(1, new ListNode(3, new ListNode(5, nullptr)));
  ListNode *l2 = new ListNode(2, new ListNode(4, new ListNode(6, nullptr)));

  vector<ListNode *> v;
  v.push_back(l1);
  v.push_back(l2);

  Solution s;
  ListNode *ans = s.mergeKLists(v);
  ListNode *p = ans;
  while (p)
  {
    cout << p->val << " ";
    p = p->next;
  }
  cout << endl;
}