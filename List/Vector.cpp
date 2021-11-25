#include <iostream>
#include <iterator>
using namespace std;

template <typename T>
class Vector
{
private:
  int _size;
  int MAX_SIZE;
  T *list;

public:
  Vector()
  {
    _size = 0;
    MAX_SIZE = 10;
    list = new T[10];
  }
  void push(T el)
  {
    if (_size + 1 >= MAX_SIZE)
    {
      T *newList = new T[MAX_SIZE * 2];
      copy(list, list + _size, newList);
      MAX_SIZE *= 2;
      list = newList;
      delete[] newList;
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
      delete[] newList;
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

  void clear()
  {
    T *newList = new T[10];
    list = newList;
    MAX_SIZE = 10;
    _size = 0;
    delete[] newList;
  }

  bool isEmpty()
  {
    return _size == 0;
  }
};

// int main()
// {
//   Vector<int> *list = new Vector<int>();

//   list->push(0);
//   list->push(1);
//   list->push(2);
//   list->push(3);
//   list->push(4);
//   list->push(5);
//   list->push(6);
//   list->push(7);
//   list->push(8);

//   list->push(9);

//   list->push(10);
//   list->push(11);
//   list->push(12);
//   list->push(13);
//   list->push(14);
//   list->push(15);
//   list->push(16);
//   list->push(17);
//   list->push(18);

//   list->push(19);

//   list->push(20);
//   list->push(21);
//   list->push(22);

//   cout << "当前表长：" << list->size() << endl;

//   list->remove(22);
//   list->remove(21);
//   list->remove(20);
//   list->remove(19);
//   list->remove(18);
//   list->remove(17);
//   list->remove(16);
//   list->remove(15);
//   list->remove(14);
//   list->remove(13);
//   list->remove(12);
//   list->remove(11);
//   list->remove(10);
//   list->remove(9);
//   list->remove(8);
//   list->remove(7);
//   list->remove(6);
//   list->remove(5);
//   list->remove(4);
//   list->remove(3);
//   list->remove(2);
//   list->remove(1);
//   list->remove(0);

//   cout << "[移除后]当前表长：" << list->size() << endl;

//   list->push(1);
//   list->push(2);
//   list->push(3);
//   list->push(4);

//   cout << "当前表长：" << list->size() << endl;
//   cout << "是否为空：" << list->isEmpty() << endl;

//   list->clear();

//   cout << "当前表长：" << list->size() << endl;
//   cout << "是否为空：" << list->isEmpty() << endl;

//   for (int i = 0; i < list->size(); i++)
//   {
//     cout << list->get(i) << ' ';
//   }

//   cout << endl;
// }
