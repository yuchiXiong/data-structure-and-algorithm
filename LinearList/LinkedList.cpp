/**
 * @file LinkedNode.cpp
 * @author yuchiXiong (yuchi.xiong@foxmail.com)
 * @brief 基于双向链表实现的链式线性容器
 * @version 0.1
 * @date 2022-02-10
 * 
 * @copyright Copyright (c) 2022
 * 
 */
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
  bool isEmpty()
  {
    return _size == 0;
  }
  void addFirst(T value)
  {
    add(0, value);
  }
  void addLast(T value)
  {
    add(_size, value);
  }
  void add(int index, T value)
  {
    DoublyLinkedNode<T> *current;
    if (index == _size)
    {
      current = new DoublyLinkedNode<T>(value, NULL, tail);
      if (head == NULL)
        head = current;
      if (tail != NULL)
        tail->next = current;
      tail = current;
    }
    else if (index == 0)
    {
      current = new DoublyLinkedNode<T>(value, head, NULL);
      if (tail == NULL)
        tail = current;
      if (head != NULL)
        head->prev = current;
      head = current;
    }
    else
    {
      DoublyLinkedNode<T> *prev = _find(index - 1);
      DoublyLinkedNode<T> *next = _find(index);

      current = new DoublyLinkedNode<T>(value, next, prev);
      prev->next = current;
      next->prev = current;
    }
    _size += 1;
  }
  T get(int index)
  {
    if (index < 0 || index >= _size)
      throw "Index out of bounds";
    return _find(index)->val;
  }
  void remove(int index)
  {
    if (index < 0 || index >= _size)
      throw "Index out of bounds";
    DoublyLinkedNode<T> *current = _find(index);

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
  void set(int index, T val)
  {
    if (index < 0 || index >= _size)
      throw "Index out of bounds";
    DoublyLinkedNode<T> *current = _find(index);
    current->val = val;
  }
  void clear()
  {
    head = NULL;
    tail = NULL;
    _size = 0;
  }

private:
  DoublyLinkedNode<T> *_find(int index)
  {
    if (index < 0 || index > _size)
      throw "Index out of bounds";
    DoublyLinkedNode<T> *current;
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

// int main()
// {
//   LinkedList<string> *books = new LinkedList<string>();
//   books->add(0, "C++ Primer");
//   books->add(1, "C++ Primer Plus");
//   books->add(2, "Ruby Meta Programming");
//   books->add(3, "Ruby On Rails Tutorial");
//   books->add(4, "Modern Front-end Development");
//   books->add(2, "C++ Concurrency in Action");
//   books->add(2, "JavaScript Language Guide");

//   cout << books->size() << endl;
//   for (int i = 0; i < books->size(); i++)
//   {
//     cout << "《" << books->get(i) << "》 " << endl;
//   }
//   cout << "------------" << endl;
//   books->remove(2);
//   books->addFirst("first");
//   books->addLast("last");

//   for (int i = 0; i < books->size(); i++)
//   {
//     cout << "《" << books->get(i) << "》 " << endl;
//   }
// }
