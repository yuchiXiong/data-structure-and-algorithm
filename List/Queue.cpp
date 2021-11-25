#include <iostream>
#include "ListNode.cpp"
using namespace std;

template <typename T>
class Queue
{
private:
  ListNode<T> *head;
  ListNode<T> *end;
  int _size;

public:
  Queue()
  {
    head = NULL;
    end = NULL;
    _size = 0;
  }
  unsigned size()
  {
    return _size;
  }
  T get()
  {
    if (_size == 0)
      return NULL;
    ListNode<T> *result = head;
    head = head->next;
    _size--;
    return result->val;
  }
  void push(T el)
  {
    ListNode<T> *current = new ListNode<T>(el, NULL);
    if (_size == 0)
    {
      head = end = current;
    }
    else
    {
      end->next = current;
      end = current;
    }
    _size++;
  }
};

int main()
{
  Queue<string> *queue = new Queue<string>();
  cout << queue->size() << endl;
  queue->push("JavaScript权威指南");
  queue->push("JavaScript高级程序设计");
  queue->push("JavaScript语言精粹");

  cout << queue->size() << endl;

  cout << queue->get() << endl;
  cout << queue->size() << endl;
  cout << queue->get() << endl;
  cout << queue->size() << endl;

  queue->push("算法");

  cout << queue->get() << endl;
  cout << queue->size() << endl;

  cout << queue->get() << endl;
  cout << queue->size() << endl;
  return 0;
}