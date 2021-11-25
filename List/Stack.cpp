#include <iostream>
#include "ListNode.cpp"
using namespace std;

template <typename T>
class Stack
{
private:
  ListNode<T> *_head;
  unsigned _size;

public:
  Stack()
  {
    _head = NULL;
    _size = 0;
  }
  bool is_empty()
  {
    return _size == 0;
  }
  void push(T el)
  {
    ListNode<T> *current = new ListNode<T>(el, _head);
    _head = current;
    _size++;
  }
  T pop()
  {
    ListNode<T> *result = _head;
    _head = _head->next;
    _size--;
    return result->val;
  }
};

int main()
{
  Stack<string> *stack = new Stack<string>();

  cout << stack->is_empty() << endl;

  stack->push("洗衣服");

  cout << stack->is_empty() << endl;

  stack->push("收衣服");

  cout << stack->is_empty() << endl;

  cout << stack->pop() << endl;

  stack->push("买菜");

  cout << stack->pop() << endl;
  cout << stack->pop() << endl;
  cout << stack->is_empty() << endl;

  return 0;
}