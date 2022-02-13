#include <iostream>
#include "Vector.cpp"
using namespace std;

template <typename T>
class ArrayQueue
{
private:
  Vector<T> *_list;

public:
  ArrayQueue()
  {
    _list = new Vector<T>();
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
    _list->push(value);
  }
  T poll()
  {
    T value = _list->get(0);
    _list->remove(0);
    return value;
  }
  void test()
  {
    for (int i = 0; i < _list->size(); i++)
    {
      cout << _list->get(i) << " ";
    }
    cout << endl;
  }
};

int main()
{
  ArrayQueue<string> *queue = new ArrayQueue<string>();
  cout << queue->size() << endl;
  queue->push("JavaScript权威指南");
  queue->push("JavaScript高级程序设计");
  queue->push("JavaScript语言精粹");

  cout << queue->size() << endl;

  cout << queue->poll() << endl;
  cout << queue->size() << endl;
  cout << queue->poll() << endl;
  cout << queue->size() << endl;

  queue->push("算法");

  cout << queue->poll() << endl;
  cout << queue->size() << endl;

  cout << queue->poll() << endl;
  cout << queue->size() << endl;
  return 0;
}