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
};

// int main()
// {
//   ListNode<int> *node1 = new ListNode<int>(0, NULL);

//   node1->val = 20;
//   ListNode<int> *node2 = new ListNode<int>(2, NULL);
//   node1->next = node2;

//   cout << node1->val << endl;
//   cout << node1->next->val << endl;
// }