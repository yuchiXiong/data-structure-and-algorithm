#include <iostream>
#include "LinkedList.cpp"
using namespace std;

template <typename T>
class LinkedQueue
{
private:
  LinkedList<T> *list;

public:
  LinkedQueue()
  {
    list = new LinkedList<T>();
  }
  bool isEmpty()
  {
    return list->size() == 0;
  }
  int size()
  {
    return list->size();
  }
  void push(T value)
  {
    list->addLast(value);
  }
  T poll()
  {
    T value = list->get(0);
    list->remove(0);
    return value;
  }
};

// int main()
// {
//   LinkedQueue<string> *queue = new LinkedQueue<string>();
//   cout << queue->size() << endl;
//   queue->push("JavaScript权威指南");
//   queue->push("JavaScript高级程序设计");
//   queue->push("JavaScript语言精粹");

//   cout << queue->size() << endl;

//   cout << queue->poll() << endl;
//   cout << queue->size() << endl;
//   cout << queue->poll() << endl;
//   cout << queue->size() << endl;

//   queue->push("算法");

//   cout << queue->poll() << endl;
//   cout << queue->size() << endl;

//   cout << queue->poll() << endl;
//   cout << queue->size() << endl;
//   // return 0;
// }