/**
 * @file ArrayStack.cpp
 * @author yuchiXiong (yuchi.xiong@foxmail.com)
 * @brief 一个基于变长数组实现的栈数据结构
 * @version 0.1
 * @date 2022-02-12
 * 
 * @copyright Copyright (c) 2022
 * 
 */
#include <iostream>
#include "Vector.cpp"
using namespace std;

template <typename T>
class ArrayStack
{
private:
  Vector<T> *_list;

public:
  ArrayStack()
  {
    _list = new Vector<T>();
  }
  bool isEmpty()
  {
    return _list->isEmpty();
  }
  int size()
  {
    return _list->size();
  }
  void push(T value)
  {
    _list->push(value);
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
//   ArrayStack<string> *stack = new ArrayStack<string>();

//   cout << ((stack->isEmpty() == 1) ? "当前栈为空" : "当前栈非空") << endl;

//   stack->push("洗衣服");

//   cout << ((stack->isEmpty() == 1) ? "当前栈为空" : "当前栈非空") << endl;

//   stack->push("收衣服");

//   cout << ((stack->isEmpty() == 1) ? "当前栈为空" : "当前栈非空") << endl;

//   cout << stack->pop() << endl;

//   stack->push("买菜");

//   cout << stack->pop() << endl;
//   cout << stack->pop() << endl;
//   cout << ((stack->isEmpty() == 1) ? "当前栈为空" : "当前栈非空") << endl;

//   return 0;
// }