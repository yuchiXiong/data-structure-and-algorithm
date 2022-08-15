#include "iostream"
using namespace std;

class MyCircularDeque
{
public:
  int _maxSize;
  int _size;
  int _front;
  int _tail;
  int *_data;
  MyCircularDeque(int k)
  {
    _maxSize = k;
    _size = 0;
    _front = 0;
    _tail = 0;
    _data = new int[_maxSize];
  }

  bool insertFront(int value)
  {
    if (isFull())
      return false;

    if (_front == _tail && _size == 0)
    {
      _tail = (_tail + 1) % _maxSize;
    }
    _data[_front] = value;

    _front = (_front - 1 + _maxSize) % _maxSize;
    _size++;

    return true;
  }

  bool insertLast(int value)
  {
    if (isFull())
      return false;

    if (_tail == _front && _size == 0)
    {
      _front = (_front - 1 + _maxSize) % _maxSize;
    }
    _data[_tail] = value;

    _tail = (_tail + 1) % _maxSize;
    _size++;

    return true;
  }

  bool deleteFront()
  {
    if (isEmpty())
      return false;

    _front = (_front + 1) % _maxSize;
    _size--;

    return true;
  }

  bool deleteLast()
  {
    if (isEmpty())
      return false;

    _tail = (_tail - 1 + _maxSize) % _maxSize;
    _size--;

    return true;
  }

  int getFront()
  {
    if (isEmpty())
      return -1;

    return _data[(_front + 1) % _maxSize];
  }

  int getRear()
  {
    if (isEmpty())
      return -1;

    return _data[(_tail - 1 + _maxSize) % _maxSize];
  }

  bool isEmpty()
  {
    return _size == 0;
  }

  bool isFull()
  {
    return _size == _maxSize;
  }
  void _test()
  {
    cout << "front" << _front << " tail" << _tail << endl;
    for (int i = 0; i < _maxSize; i++)
    {
      cout << _data[i] << " ";
    }
    cout << endl;
  }
};

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * MyCircularDeque* obj = new MyCircularDeque(k);
 * bool param_1 = obj->insertFront(value);
 * bool param_2 = obj->insertLast(value);
 * bool param_3 = obj->deleteFront();
 * bool param_4 = obj->deleteLast();
 * int param_5 = obj->getFront();
 * int param_6 = obj->getRear();
 * bool param_7 = obj->isEmpty();
 * bool param_8 = obj->isFull();
 */

int main()
{

  // case1
  MyCircularDeque *obj = new MyCircularDeque(3);

  obj->insertLast(1);
  obj->_test();

  obj->insertLast(2);
  obj->_test();

  obj->insertFront(3);
  obj->_test();

  obj->insertFront(4);
  obj->_test();

  cout << obj->getRear() << endl;
  obj->_test();

  obj->isFull();
  obj->_test();

  obj->deleteLast();
  obj->_test();

  obj->insertFront(4);
  obj->_test();

  obj->getFront();
  obj->_test();

  // case2
  // MyCircularDeque *obj = new MyCircularDeque(4);
  // obj->insertFront(9);
  // obj->_test();

  // obj->deleteLast();
  // obj->_test();

  // obj->getRear();
  // obj->_test();

  // obj->getFront();
  // obj->_test();

  // obj->getFront();
  // obj->_test();

  // obj->deleteFront();
  // obj->_test();

  // obj->insertFront(6);
  // obj->_test();

  // obj->insertLast(5);
  // obj->_test();

  // obj->insertFront(9);
  // obj->_test();

  // obj->getFront();
  // obj->_test();

  // obj->insertFront(6);
  // obj->_test();

  // case3
  // MyCircularDeque *obj = new MyCircularDeque(5);
  // obj->insertFront(7);
  // obj->_test();

  // obj->insertLast(0);
  // obj->_test();

  // obj->getFront();
  // obj->_test();

  // obj->insertLast(3);
  // obj->_test();

  // obj->getFront();
  // obj->_test();

  // obj->insertFront(9);
  // obj->_test();

  // obj->getRear();
  // obj->_test();

  // obj->getFront();
  // obj->_test();

  // obj->getFront();
  // obj->_test();

  // obj->deleteLast();
  // obj->_test();

  // obj->getRear();
  // obj->_test();
}