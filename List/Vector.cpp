#include <iostream>
#include <iterator>
using namespace std;

template <typename T>
class Vector
{
private:
  int _size = 0;
  int MAX_SIZE = 10;
  T *list = new T[10];

public:
  Vector()
  {
  }
  void push(T el)
  {
    if (_size + 1 >= MAX_SIZE)
    {
      T *newList = new T[MAX_SIZE * 2];
      for (int i = 0; i < MAX_SIZE; i++)
      {
        newList[i] = list[i];
      }
      MAX_SIZE *= 2;
      list = newList;
    }
    list[_size++] = el;
  }

  T get(int index)
  {
    return list[index];
  }

  void remove(int index)
  {
    if (_size <= MAX_SIZE * 0.25)
    {
      T *newList = new T[MAX_SIZE / 2];

      if (index != 0)
      {
        copy(list, list + index, newList);
      }
      copy(list + index + 1, list + _size, newList + index - 1);

      list = newList;
      MAX_SIZE /= 2;
    }
    else
    {
      copy(list + index + 1, list + _size, list + index);
    }
    _size--;
  }

  int size()
  {
    return _size;
  }

  int maxSize()
  {
    return MAX_SIZE;
  }
};

int main()
{
  Vector<int> *list = new Vector<int>();

  list->push(0);
  list->push(1);
  list->push(2);
  list->push(3);
  list->push(4);
  list->push(5);
  list->push(6);
  list->push(7);
  list->push(8);

  cout << "当前最大长度：" << list->maxSize() << endl;

  list->push(9);

  cout << "当前最大长度：" << list->maxSize() << endl;

  list->push(10);
  list->push(11);
  list->push(12);
  list->push(13);
  list->push(14);
  list->push(15);
  list->push(16);
  list->push(17);
  list->push(18);

  cout << "当前最大长度：" << list->maxSize() << endl;

  list->push(19);

  cout << "当前最大长度：" << list->maxSize() << endl;

  list->push(20);
  list->push(21);
  list->push(22);

  cout << "当前表长：" << list->size() << endl;

  list->remove(22);
  list->remove(21);
  list->remove(20);
  list->remove(19);
  list->remove(18);
  list->remove(17);
  list->remove(16);
  list->remove(15);
  list->remove(14);
  list->remove(13);
  list->remove(12);
  list->remove(11);
  list->remove(10);
  list->remove(9);
  list->remove(8);
  list->remove(7);
  list->remove(6);
  list->remove(5);
  list->remove(4);
  list->remove(3);
  list->remove(2);
  list->remove(1);
  list->remove(0);

  cout << "[移除后]当前最大长度：" << list->maxSize() << endl;
  cout << "[移除后]当前表长：" << list->size() << endl;

  for (int i = 0; i < list->size(); i++)
  {
    cout << list->get(i) << ' ';
  }

  cout << endl;
}
