#include "iostream"
using namespace std;

template <typename T>
class DoublyLinkedNode
{
public:
  T val;
  DoublyLinkedNode<T> *next;
  DoublyLinkedNode<T> *prev;
  DoublyLinkedNode(T val, DoublyLinkedNode<T> *nextNode = NULL, DoublyLinkedNode<T> *prevNode = NULL)
  {
    this->val = val;
    this->next = nextNode;
    this->prev = prevNode;
  }
};

class MyLinkedList
{
private:
  DoublyLinkedNode<int> *head;
  DoublyLinkedNode<int> *tail;
  int _size;

public:
  MyLinkedList()
  {
    head = NULL;
    tail = NULL;
    _size = 0;
  }

  int get(int index)
  {
    if (index < 0 || index >= _size)
      return -1;

    return _find(index)->val;
  }

  void addAtHead(int val)
  {
    addAtIndex(0, val);
  }

  void addAtTail(int val)
  {
    addAtIndex(_size, val);
  }

  void addAtIndex(int index, int val)
  {
    if (index > _size)
      return;
    DoublyLinkedNode<int> *current;
    if (index == _size)
    {
      current = new DoublyLinkedNode<int>(val, NULL, tail);
      if (head == NULL)
        head = current;
      if (tail != NULL)
        tail->next = current;
      tail = current;
    }
    else if (index <= 0)
    {
      current = new DoublyLinkedNode<int>(val, head, NULL);
      if (tail == NULL)
        tail = current;
      if (head != NULL)
        head->prev = current;
      head = current;
    }
    else
    {
      DoublyLinkedNode<int> *prev = _find(index - 1);
      DoublyLinkedNode<int> *next = _find(index);

      current = new DoublyLinkedNode<int>(val, next, prev);
      prev->next = current;
      next->prev = current;
    }
    _size += 1;
  }

  void deleteAtIndex(int index)
  {
    if (index < 0 || index >= _size)
      return;
    DoublyLinkedNode<int> *current = _find(index);

    if (current->prev != NULL)
      current->prev->next = current->next;
    else
      head = current->next;
    if (current->next != NULL)
      current->next->prev = current->prev;
    else
      tail = current->prev;
    _size -= 1;
  }

private:
  DoublyLinkedNode<int> *_find(int index)
  {
    if (index < 0 || index > _size)
      throw "Index out of bounds";

    DoublyLinkedNode<int> *current;
    if (index < _size / 2)
    {
      int i = 0;
      current = head;
      while (i != index)
      {
        current = current->next;
        i += 1;
      }
    }
    else
    {
      int i = _size - 1;
      current = tail;
      while (i != index)
      {
        current = current->prev;
        i -= 1;
      }
    }

    return current;
  }
};

int main()
{
  MyLinkedList *list = new MyLinkedList();

  // list->addAtHead(2);
  // list->deleteAtIndex(1);
  // list->addAtHead(2);
  // list->addAtHead(7);
  // list->addAtHead(3);
  // list->addAtHead(2);
  // list->addAtHead(5);
  // list->addAtTail(5);
  // list->get(5);
  // list->deleteAtIndex(6);
  // list->deleteAtIndex(4);

  // ["MyLinkedList","addAtHead","addAtTail","addAtIndex"]
  // [[],[1],[3],[3,2]]
  list->addAtHead(1);
  list->addAtTail(3);
  list->addAtIndex(3, 2);
}