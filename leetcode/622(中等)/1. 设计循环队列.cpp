#include "iostream"
using namespace std;

class MyCircularQueue
{
public:
  int *_arr;
  int _maxSize;
  int _front;
  int _tail;
  int _size;
  MyCircularQueue(int k)
  {
    _arr = new int[k];
    _maxSize = k;
    _front = _tail = _size = 0;
  }

  bool enQueue(int value)
  {
    if (isFull())
      return false;

    _arr[_tail] = value;
    _tail = (_tail + 1) % _maxSize;
    _size++;
    return true;
  }

  bool deQueue()
  {
    if (isEmpty())
      return false;

    _front = (_front + 1) % _maxSize;
    _size--;
    return true;
  }

  int Front()
  {
    if (isEmpty())
    {
      return -1;
    }

    return _arr[_front];
  }

  int Rear()
  {
    if (isEmpty())
    {
      return -1;
    }

    return _arr[(_tail - 1 + _maxSize) % _maxSize];
  }

  bool isEmpty()
  {
    return _size == 0;
  }

  bool isFull()
  {
    return _size == _maxSize;
  }
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * MyCircularQueue* obj = new MyCircularQueue(k);
 * bool param_1 = obj->enQueue(value);
 * bool param_2 = obj->deQueue();
 * int param_3 = obj->Front();
 * int param_4 = obj->Rear();
 * bool param_5 = obj->isEmpty();
 * bool param_6 = obj->isFull();
 */

int main()
{
  MyCircularQueue *circularQueue = new MyCircularQueue(3); // 设置长度为 3
  cout << (circularQueue->enQueue(1) ? "T" : "F") << endl; // true
  // cout << circularQueue->_front << "-" << circularQueue->_tail << endl;

  cout << (circularQueue->enQueue(2) ? "T" : "F") << endl; // true
  // cout << circularQueue->_front << "-" << circularQueue->_tail << endl;

  cout << (circularQueue->enQueue(3) ? "T" : "F") << endl; // true
  // cout << circularQueue->_front << "-" << circularQueue->_tail << endl;

  cout << (circularQueue->enQueue(4) ? "T" : "F") << endl; // false，队列已满
  // cout << circularQueue->_front << "-" << circularQueue->_tail << endl;

  cout << (circularQueue->Rear()) << endl; // 3
  // cout << circularQueue->_front << "-" << circularQueue->_tail << endl;

  cout << (circularQueue->isFull() ? "T" : "F") << endl; // true
  // cout << circularQueue->_front << "-" << circularQueue->_tail << endl;

  cout << (circularQueue->deQueue() ? "T" : "F") << endl; // true
  // cout << circularQueue->_front << "-" << circularQueue->_tail << endl;

  cout << (circularQueue->enQueue(4) ? "T" : "F") << endl; // true
  // cout << circularQueue->_front << "-" << circularQueue->_tail << endl;

  cout << (circularQueue->Rear()) << endl; // 4
  // cout << circularQueue->_front << "-" << circularQueue->_tail << endl;
}