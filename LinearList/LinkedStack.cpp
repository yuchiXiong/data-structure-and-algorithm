/**
 * @file LinkedStack.cpp
 * @author yuchiXiong (yuchi.xiong@foxmail.com)
 * @brief 一个基于双向链表实现的栈数据结构
 * @version 0.1
 * @date 2022-02-12
 * 
 * @copyright Copyright (c) 2022
 * 
 */
#include <iostream>
#include "LinkedList.cpp"
using namespace std;

template <typename T>
class LinkedStack
{
private:
  LinkedList<T> *_list;

public:
  LinkedStack()
  {
    _list = new LinkedList<T>();
  }
  int size()
  {
    return _list->size();
  }
  bool isEmpty()
  {
    return _list->isEmpty();
  }
  void push(T value)
  {
    _list->add(_list->size(), value);
  }
  T pop()
  {
    T current = _list->get(_list->size() - 1);
    _list->remove(_list->size() - 1);
    return current;
  }
};

// int main()
// {
//   LinkedStack<string> *stack = new LinkedStack<string>();

//   cout << ((stack->isEmpty() == 0) ? "当前栈为空" : "当前栈非空") << endl;

//   stack->push("洗衣服");

//   cout << ((stack->isEmpty() == 0) ? "当前栈为空" : "当前栈非空") << endl;

//   stack->push("收衣服");

//   cout << ((stack->isEmpty() == 0) ? "当前栈为空" : "当前栈非空") << endl;

//   cout << stack->pop() << endl;

//   stack->push("买菜");

//   cout << stack->pop() << endl;
//   cout << stack->pop() << endl;
//   cout << ((stack->isEmpty() == 0) ? "当前栈为空" : "当前栈非空") << endl;

//   return 0;
// }