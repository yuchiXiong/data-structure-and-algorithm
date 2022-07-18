/**
 * @file CircularQueue.cpp
 * @author yuchiXiong (yuchi.xiong@foxmail.com)
 * @brief 一个简单的循环队列实现
 * @version 0.1
 * @date 2022-02-13
 * 
 * @copyright Copyright (c) 2022
 * 
 */
#include <iostream>
using namespace std;

#define _DEFAULT_MAX_SIZE 10

template <typename T>
class CircularQueue
{
private:
  int _size = 0;
  int _maxSize = _DEFAULT_MAX_SIZE;
  int _front = 0;
  int _rear = 0;
  T *_list;

public:
  CircularQueue()
  {
    _list = new T[_DEFAULT_MAX_SIZE];
  }
  int size()
  {
    return _size;
  }
  bool isEmpty()
  {
    return _size == 0;
  }
  void clear()
  {
    T *oldList = _list;
    _list = new T[_DEFAULT_MAX_SIZE];
    _maxSize = _DEFAULT_MAX_SIZE;
    _size = 0;
    delete[] oldList;
    oldList = NULL;
  }
  void push(T value)
  {
    if (_size + 1 > _maxSize)
    {
      T *oldList = _list;
      _list = new T[_maxSize *= 2];
      copy(oldList + _front, oldList + _size, _list);
      if (_front > 0)
      {
        copy(oldList, oldList + _rear, _list + _size - _front);
      }
      _rear = _size;
      _front = 0;
      delete[] oldList;
      oldList = NULL;
    }
    if (_rear >= _maxSize)
    {
      _rear = 0;
    }
    _list[_rear++] = value;
    _size++;
  }
  T poll()
  {
    T current = _list[_front];
    if (_size <= _maxSize * 0.25 && _maxSize > _DEFAULT_MAX_SIZE)
    {
      T *oldList = _list;
      _list = new T[_maxSize /= 2];

      copy(oldList + _front + 1, oldList + _front + _size, _list);
      if (_front > 0)
      {
        copy(oldList, oldList + _rear, _list + _maxSize * 2 - _front - 1);
      }

      _front = 0;
      _rear = _size - 1;
      delete[] oldList;
      oldList = NULL;
    }
    else
    {
      _front++;
    }
    _size--;
    return current;
  }
};

// int main()
// {
//   CircularQueue<string> *langs = new CircularQueue<string>();

//   langs->push("c");
//   langs->push("c++");
//   langs->push("java");
//   langs->push("python");
//   langs->push("javascript");
//   langs->push("go");
//   langs->push("c#");
//   langs->push("ruby");

//   cout << langs->poll() << endl; // c
//   cout << langs->poll() << endl; // c++
//   cout << langs->poll() << endl; // java

//   langs->push("swift");
//   langs->push("kotlin");
//   langs->push("php");
//   langs->push("objective-c");
//   langs->push("typescript");
//   langs->push("lisp");
//   langs->push("lua");

//   cout << langs->poll() << endl; // python
//   cout << langs->poll() << endl; // javascript

//   langs->push("rust");
//   langs->push("scala");
//   langs->push("groovy");
//   langs->push("perl");
//   langs->push("erlang");
//   langs->push("haskell");

//   cout << langs->poll() << endl; // go
//   cout << langs->poll() << endl; // c#
//   cout << langs->poll() << endl; // ruby
//   cout << langs->poll() << endl; // swift
//   cout << langs->poll() << endl; // kotlin
//   cout << langs->poll() << endl; // php

//   langs->push("clojure");
//   langs->push("clojureScript");
//   langs->push("elixir");

//   cout << langs->poll() << endl; // objective-c
//   cout << langs->poll() << endl; // typescript
//   cout << langs->poll() << endl; // lisp
//   cout << langs->poll() << endl; // lua
//   cout << langs->poll() << endl; // rust
//   cout << langs->poll() << endl; // scala
//   cout << langs->poll() << endl; // groovy
//   cout << langs->poll() << endl; // perl
//   cout << langs->poll() << endl; // erlang
//   cout << langs->poll() << endl; // haskell
//   cout << langs->poll() << endl; // clojure
//   cout << langs->poll() << endl; // clojureScript
//   cout << langs->poll() << endl; // elixir
//   cout << langs->poll() << endl; //
// }