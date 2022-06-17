#include "iostream"
#include "stack"
using namespace std;

class MyQueue
{
private:
  int _size;
  stack<int> s1;
  stack<int> s2;

public:
  MyQueue()
  {
    _size = 0;
  }

  void push(int x)
  {
    s1.push(x);
    _size++;
  }

  int pop()
  {
    int len = s1.size();
    for (int i = 0; i < len; i++)
    {
      s2.push(s1.top());
      s1.pop();
    }

    int result = s2.top();
    s2.pop();

    len = s2.size();
    for (int i = 0; i < len; i++)
    {
      s1.push(s2.top());
      s2.pop();
    }

    _size--;

    return result;
  }

  int peek()
  {
    int len = s1.size();
    for (int i = 0; i < len; i++)
    {
      s2.push(s1.top());
      s1.pop();
    }

    int result = s2.top();

    len = s2.size();
    for (int i = 0; i < len; i++)
    {
      s1.push(s2.top());
      s2.pop();
    }

    return result;
  }

  bool empty()
  {
    return _size == 0;
  }
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * MyQueue* obj = new MyQueue();
 * obj->push(x);
 * int param_2 = obj->pop();
 * int param_3 = obj->peek();
 * bool param_4 = obj->empty();
 */

int main()
{
  MyQueue *obj = new MyQueue();
  obj->push(1);
  obj->push(2);

  cout << obj->peek() << endl;
  cout << obj->pop() << endl;
  cout << obj->empty() << endl;

  // cout << obj->peek() << endl;
  // cout << obj->pop() << endl;
  // cout << (obj->empty() ? "true" : "false") << endl;
}