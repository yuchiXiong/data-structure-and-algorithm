#include <iostream>
using namespace std;

template <typename T>
class ListNode
{
public:
  T val;
  ListNode<T> *next;
  ListNode(T value, ListNode<T> *nextNode = NULL)
  {
    val = value;
    next = nextNode;
  }

  void reverse()
  {
    ListNode<T> *p = this;
    ListNode<T> *head = new ListNode<T>(val, NULL);

    while (p)
    {
      ListNode<T> *current = new ListNode<T>(p->val, head);
      val = p->val;
      head = current;

      p = p->next;
    }
    next = head->next;
  }
};

// int main()
// {

//   ListNode<int> *node3 = new ListNode<int>(30, NULL);

//   ListNode<int> *node2 = new ListNode<int>(20, node3);
//   ListNode<int> *node1 = new ListNode<int>(10, node2);

//   cout << "0:" << node1->val << endl;
//   cout << "1:" << node1->next->val << endl;
//   cout << "2:" << node1->next->next->val << endl;

//   node1->reverse();
//   cout << "反转后" << endl;

//   cout << "0:" << node1->val << endl;
//   cout << "1:" << node1->next->val << endl;
//   cout << "2:" << node1->next->next->val << endl;
// }