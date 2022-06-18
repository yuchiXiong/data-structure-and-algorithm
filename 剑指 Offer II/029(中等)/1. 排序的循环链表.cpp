#include "iostream"
using namespace std;

/* Definition for a Node. */
class Node
{
public:
  int val;
  Node *next;

  Node() {}

  Node(int _val)
  {
    val = _val;
    next = NULL;
  }

  Node(int _val, Node *_next)
  {
    val = _val;
    next = _next;
  }
};

class Solution
{
public:
  Node *insert(Node *head, int insertVal)
  {
    if (head == NULL)
    {
      Node *p = new Node(insertVal, NULL);
      p->next = p;
      return p;
    }

    if (head == head->next)
    {
      Node *p = new Node(insertVal, NULL);
      if (head->val < insertVal)
      {
        head->next = p;
        p->next = head;
      }
      else
      {
        p->next = head;
        head->next = p;
      }

      return head;
    }

    Node *current = head;
    bool inserted = false;
    int count = 0;

    while (true)
    {
      if (current->val < insertVal && current->next->val >= insertVal)
      {
        Node *p = new Node(insertVal, current->next);
        current->next = p;
        return head;
      }

      if (current->next == head)
      {
        count++;
      }

      if ((current->val >= current->next->val) && count > 0)
      {
        Node *p = new Node(insertVal, current->next);
        current->next = p;
        return head;
      }

      current = current->next;
    }

    return head;
  }

  void case1()
  {
    Node *l1 = new Node(3, NULL);
    Node *l2 = new Node(4, NULL);
    Node *l3 = new Node(1, NULL);

    l1->next = l2;
    l2->next = l3;
    l3->next = l1;

    Node *result = insert(l1, 2);

    Node *current = result->next;
    cout << result->val << " ";

    while (current != l1)
    {
      cout << current->val << " ";
      current = current->next;
    }

    cout << endl;
  }

  void case2()
  {
    Node *l1 = new Node(1, NULL);
    Node *l2 = new Node(3, NULL);
    Node *l3 = new Node(5, NULL);

    l1->next = l2;
    l2->next = l3;
    l3->next = l1;

    Node *result = insert(l1, 0);

    Node *current = result->next;
    cout << result->val << " ";

    while (current != result)
    {
      cout << current->val << " ";
      current = current->next;
    }

    cout << endl;
  }

  void case3()
  {
    Node *l1 = new Node(3, NULL);
    Node *l2 = new Node(3, NULL);
    Node *l3 = new Node(3, NULL);

    l1->next = l2;
    l2->next = l3;
    l3->next = l1;

    Node *result = insert(l1, 0);

    Node *current = result->next;
    cout << result->val << " ";

    while (current != result)
    {
      cout << current->val << " ";
      current = current->next;
    }

    cout << endl;
  }

  void case4()
  {
    Node *l1 = new Node(1, NULL);
    Node *l2 = new Node(3, NULL);
    Node *l3 = new Node(5, NULL);

    l1->next = l2;
    l2->next = l3;
    l3->next = l1;

    Node *result = insert(l1, 2);
    Node *current = result;

    do
    {
      cout << current->val << " ";
      current = current->next;
    } while (current != result);

    cout << endl;
  }

  void case5()
  {
    Node *l1 = new Node(3, NULL);
    Node *l2 = new Node(5, NULL);
    Node *l3 = new Node(1, NULL);

    l1->next = l2;
    l2->next = l3;
    l3->next = l1;

    Node *result = insert(l1, 0);
    Node *current = result;

    do
    {
      cout << current->val << " ";
      current = current->next;
    } while (current != result);

    cout << endl;
  }
};

int main()
{
  Solution *s = new Solution();
  s->case5();
}