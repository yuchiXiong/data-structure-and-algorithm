#include <iostream>
#include "DoublyLinkedNode.cpp"
using namespace std;

template <typename T>
class LinkedList
{
private:
  DoublyLinkedNode<T> *head;
  DoublyLinkedNode<T> *tail;
  int _size;

public:
  LinkedList()
  {
    head = NULL;
    tail = NULL;
    _size = 0;
  }
  int size()
  {
    return _size;
  }
  void push(T value)
  {
    DoublyLinkedNode<T> *current = new DoublyLinkedNode<T>(value, NULL, tail);
    if (head == NULL)
      head = current;
    tail = current;
    _size += 1;
  }
  T get(int index)
  {
    DoublyLinkedNode<T> *current;
    if (index < _size / 2)
    {
      current = head;
      int i = 0;
      while (i != index)
      {
        current = current->next;
        i += 1;
      }
    }
    else
    {
      current = tail;
      int i = _size - 1;
      while (i != index)
      {
        current = current->prev;
        i -= 1;
      }
    }
    return current->val;
  }
};

int main()
{
  LinkedList<int> *list = new LinkedList<int>();
  list->push(1);
  list->push(2);
  list->push(3);
  list->push(4);

  list->get(0);
  list->get(1);
  // for (int i = 0; i < list->size() - 1; i += 1)
  // {
  //   cout << list->get(i) << endl;
  // }
}