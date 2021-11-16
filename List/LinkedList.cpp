#include <iostream>
#include "ListNode.cpp"
using namespace std;

template <typename T>
class LinkedList
{
private:
  ListNode<T> *head;
  int _size;

public:
  LinkedList()
  {
    head = NULL;
    _size = 0;
  }

  // 添加元素到表尾
  void push(T val)
  {
    ListNode<T> *node = new ListNode<T>(val, NULL);
    if (head)
    {
      node->next = head;
      head = node;
    }
    else
    {
      head = node;
    }
    _size++;
  }

  // 返回表长度
  int size()
  {
    return _size;
  }

  // 弹出表尾元素
  T pop()
  {
    ListNode<T> *p = head;
    head = head->next;
    return p->val;
    _size--;
  }

  // 获取指定位置的表元素
  T get(int index)
  {
    ListNode<T> *p = head;
    int i = 0;
    T result;
    while (p)
    {
      if (index == _size - i - 1)
      {
        result = p->val;
        break;
      }
      p = p->next;
      i++;
    }
    return result;
  }

  // 移除表头元素
  void remove()
  {
    int i = 0;
    ListNode<T> *p = head;
    while (i < _size)
    {
      if (p->next->next == NULL)
      {
        delete p->next;
        p->next = NULL;
        break;
      }
      p = p->next;
      i++;
    }
    _size--;
  }

  // 删除指定位置的元素
  void remove(int index)
  {
    int i = 0;
    ListNode<T> *current = head;
    ListNode<T> *next = head->next;
    if (index == _size - 1)
    {
      head = head->next;
      _size--;
      return;
    }
    while (i < _size)
    {
      if (index == _size - i - 2)
      {
        ListNode<T> *node = current->next->next;
        delete next;
        current->next = node;
        break;
      }
      current = current->next;
      next = next->next;
      i++;
    }
    _size--;
  }

  // 清空列表
  void clear()
  {
    head = NULL;
    _size = 0;
  }
};

// int main()
// {
//   LinkedList<string> *list = new LinkedList<string>();
//   list->push("JavaScript");
//   list->push("Java");
//   list->push("Python");
//   list->push("Ruby");
//   list->push("Golang");

//   // * case1: get(int index)
//   // cout << list->size() << endl;
//   // cout << "index 0: " << list->get(0) << endl;
//   // cout << "index 1: " << list->get(1) << endl;
//   // cout << "index 2: " << list->get(2) << endl;
//   // cout << "index 3: " << list->get(3) << endl;
//   // cout << "index 4: " << list->get(4) << endl;

//   // * case2: remove()
//   // cout << list->size() << endl;
//   // cout << list->get(0) << endl;
//   // list->remove();
//   // cout << list->size() << endl;
//   // cout << list->get(0) << endl;
//   // list->remove();
//   // cout << list->size() << endl;
//   // cout << list->get(0) << endl;
//   // list->remove();
//   // cout << list->size() << endl;
//   // cout << list->get(0) << endl;
//   // list->push("Lisp");
//   // list->remove();
//   // cout << list->size() << endl;
//   // cout << list->get(0) << endl;

//   // * case3: remove(int index)
//   // list->remove(4);
//   // list->remove(2);
//   // list->remove(0);
//   // list->remove(1);
//   // list->remove(0);
//   // cout << list->size() << endl;
//   // cout << list->get(0) << endl;
//   // cout << list->get(1) << endl;
//   // cout << list->get(2) << endl;
//   // cout << list->get(3) << endl;

//   // * case4: clear()
//   // cout << list->size() << endl;
//   // list->clear();
//   // cout << list->size() << endl;
// }