/**
 * @file SLinkedNode.cpp
 * @author yuchiXiong (yuchi.xiong@foxmail.com)
 * @brief 基于单链表实现的链式线性容器
 * @version 0.1
 * @date 2021-11-16
 * 
 * @copyright Copyright (c) 2022
 * 
 */
#include <iostream>
#include "LinkedNode.cpp"
using namespace std;

template <typename T>
class SLinkedList
{
public:
  SLinkedList()
  {
    head = NULL;
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
  void addFirst(T val)
  {
    add(0, val);
  }
  void addLast(T val)
  {
    add(_size, val);
  }
  void add(int index, T val)
  {
    if (index < 0 || index > _size)
      throw "index out of bound";
    if (head == NULL)
    {
      head = new LinkedNode<T>(val);
      _size++;
      return;
    }
    LinkedNode<T> *node, *next;
    if (index == 0)
      _find(0)->next = new LinkedNode<T>(val, NULL);
    else if (index == _size)
    {
      head = new LinkedNode<T>(val, head);
    }
    else
    {
      next = _find(index);
      node = new LinkedNode<T>(val, next->next != NULL ? next->next : NULL);
      next->next = node;
    }
    _size++;
  }
  T get(int index)
  {
    return _find(index)->val;
  }
  void set(int index, T value)
  {
    _find(index)->val = value;
  }
  void remove(int index)
  {
    int i = _size - 1;
    LinkedNode<T> *current = head;
    if (index == _size - 1)
    {
      head = head->next;
      delete current;
      _size--;
      return;
    }

    if (index == 0)
    {
      LinkedNode<T> *current = _find(index);

      _find(1)->next = NULL;
      delete current;
    }
    else
    {
      LinkedNode<T> *current = _find(index + 1);
      current->next = current->next->next;
    }
    _size--;
  }
  void clear()
  {
    head = NULL;
    _size = 0;
  }

private:
  LinkedNode<T> *head;
  int _size;
  LinkedNode<T> *_find(int index)
  {
    if (index < 0 || index >= _size)
      return NULL;
    LinkedNode<T> *current = head;
    int i = _size - 1;
    while (current)
    {
      if (index == i)
        break;
      current = current->next;
      i--;
    }
    return current;
  }
};

// int main()
// {
//   SLinkedList<string> *riders = new SLinkedList<string>();

//   riders->add(0, "kuuga");
//   riders->add(1, "agito");
//   riders->add(2, "ryuki");
//   riders->add(3, "blade");

//   riders->add(3, "faiz");
//   riders->addLast("kabuto");
//   riders->addLast("den-o");
//   riders->addLast("kiva");
//   riders->addLast("w");
//   riders->add(5, "hibiki");
//   riders->add(9, "decade");
//   riders->addFirst("zoo");
//   riders->addFirst("J");
//   riders->add(riders->size(), "000");
//   riders->set(riders->size() - 1, "ooo");
//   riders->remove(1);
//   riders->remove(0);

//   for (int i = 0; i < riders->size(); i++)
//   {
//     cout << riders->get(i) << " ";
//   }

//   cout << endl;
// }