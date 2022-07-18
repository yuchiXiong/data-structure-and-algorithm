#include "iostream"
#include "./Vector.cpp"
#include "../../tools/tools.cpp"
using namespace std;

template <typename T>
class PriorityQueue
{

public:
  int _data[2000000];
  int _capacity;
  int _size;
  PriorityQueue()
  {
    _data[0] = -999;
    _size = 1;
    _capacity = 10;
  }
  int size()
  {
    return _size - 1;
  }
  bool isEmpty()
  {
    return _size - 1 == 0;
  }
  void push(int val)
  {
    _data[_size] = val;
    _swim(_size);
    _size++;
  }
  int max()
  {
    return _data[1];
  }
  int pop()
  {
    int tmp = _data[1];
    _data[1] = _data[_size - 1];
    _size--;
    _sink(1);
    return tmp;
  }

private:
  void _swim(int cur)
  {
    int parent = _parent_index(cur);
    while (parent != 0 && _data[cur] > _data[parent])
    {
      int tmp = _data[cur];
      _data[cur] = _data[parent];
      _data[parent] = tmp;

      cur = parent;
      parent = _parent_index(cur);
    }
  }
  void _sink(int cur)
  {
    int lchild = _lchild_index(cur);
    int rchild = _rchild_index(cur);
    while (_data[cur] < _data[lchild] || _data[cur] < _data[rchild])
    {

      int _cur = lchild;
      if (_data[lchild] < _data[rchild])
      {
        _cur = rchild;
      }

      int tmp = _data[cur];
      _data[cur] = _data[_cur];
      _data[_cur] = tmp;

      cur = _cur;
      lchild = _lchild_index(cur);
      rchild = _rchild_index(cur);

      if (lchild > _size || rchild > _size)
        return;
    }
  }
  int _parent_index(int index)
  {
    return index / 2;
  }
  int _lchild_index(int index)
  {
    return index * 2;
  }
  int _rchild_index(int index)
  {
    return index * 2 + 1;
  }
};

int main()
{
  PriorityQueue<int> pq;

  int casesCount = 2000000;
  int *cases = ArrayTools::random(casesCount);
  for (int i = 0; i < casesCount; i++)
  {
    pq.push(cases[i]);
  }

  int cur = pq.pop();
  bool flag = true;
  for (int i = 1; i < casesCount; i++)
  {
    if (cur < pq.max())
    {
      flag = false;
      break;
    }
    cur = pq.pop();
  }

  cout << "验证" << (flag ? "通过" : "不通过") << " 样本数：" << casesCount << endl;
}