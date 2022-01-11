
/**
 * @file Vector.cpp
 * @author yuchiXiong (yuchi.xiong@foxmail.com)
 * @brief A vector class containing common sorting methods.
 * @version 0.1
 * @date 2022-01-11
 * 
 * @copyright Copyright (c) 2022
 * 
 */
#include <iostream>
#include <iterator>
#include <time.h>
using namespace std;

template <typename T>
class Vector
{
private:
  int _size;
  int _maxSize;
  T *_list;

public:
  Vector()
  {
    _size = 0;
    _maxSize = 10;
    _list = new T[10];
  }
  void push(T el)
  {
    if (_size + 1 >= _maxSize)
    {
      T *newList = new T[_maxSize * 2];
      copy(_list, _list + _size, newList);
      _maxSize *= 2;
      _list = newList;
      // delete[] newList;
    }
    _list[_size++] = el;
  }

  T get(int index)
  {
    return _list[index];
  }

  void remove(int index)
  {
    if (_size <= _maxSize * 0.25)
    {
      T *newList = new T[_maxSize / 2];

      if (index != 0)
      {
        copy(_list, _list + index, newList);
      }
      copy(_list + index + 1, _list + _size, newList + index - 1);

      _list = newList;
      _maxSize /= 2;
      delete[] newList;
    }
    else
    {
      copy(_list + index + 1, _list + _size, _list + index);
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
    _list = newList;
    _maxSize = 10;
    _size = 0;
    delete[] newList;
  }

  bool isEmpty()
  {
    return _size == 0;
  }

  void algo_bubbleSort()
  {
    for (int i = 0; i < _size; i++)
    {
      for (int j = 0; j < _size - i - 1; j++)
      {
        if (_list[j] > _list[j + 1])
        {
          swap(_list[j], _list[j + 1]);
        }
      }
    }
  }

  // void algo_insertSort()
  // {

  // }

  // void algo_shellSort()
  // {
  // }

  void algo_mergeSort()
  {
    algo_mergeSort(0, _size - 1);
  }

private:
  void algo_mergeSort(int low, int high)
  {

    if (high <= low)
      return;
    int mid = low + (high - low) / 2;

    algo_mergeSort(low, mid);
    algo_mergeSort(mid + 1, high);
    algo_merge(low, mid, high);
  }
  void algo_merge(int low, int mid, int high)
  {
    int i = low, j = mid + 1;
    T aux[high + 1];
    for (int i = low; i <= high; i++)
    {
      aux[i] = _list[i];
    }

    for (int k = low; k <= high; k++)
    {
      if (i > mid)
      {
        _list[k] = aux[j++];
      }
      else if (j > high)
      {
        _list[k] = aux[i++];
      }
      else if (aux[i] > aux[j])
      {
        _list[k] = aux[j++];
      }
      else
      {
        _list[k] = aux[i++];
      }
    }
  }
};

int main()
{
  // * basic test case
  // Vector<int> *list = new Vector<int>();

  // list->push(0);
  // list->push(1);
  // list->push(2);
  // list->push(3);
  // list->push(4);
  // list->push(5);
  // list->push(6);
  // list->push(7);
  // list->push(8);

  // list->push(9);

  // list->push(10);
  // list->push(11);
  // list->push(12);
  // list->push(13);
  // list->push(14);
  // list->push(15);
  // list->push(16);
  // list->push(17);
  // list->push(18);

  // list->push(19);

  // list->push(20);
  // list->push(21);
  // list->push(22);

  // cout << "当前表长：" << list->size() << endl;

  // list->remove(22);
  // list->remove(21);
  // list->remove(20);
  // list->remove(19);
  // list->remove(18);
  // list->remove(17);
  // list->remove(16);
  // list->remove(15);
  // list->remove(14);
  // list->remove(13);
  // list->remove(12);
  // list->remove(11);
  // list->remove(10);
  // list->remove(9);
  // list->remove(8);
  // list->remove(7);
  // list->remove(6);
  // list->remove(5);
  // list->remove(4);
  // list->remove(3);
  // list->remove(2);
  // list->remove(1);
  // list->remove(0);

  // cout << "[移除后]当前表长：" << list->size() << endl;

  // list->push(1);
  // list->push(2);
  // list->push(3);
  // list->push(4);

  // cout << "当前表长：" << list->size() << endl;
  // cout << "是否为空：" << list->isEmpty() << endl;

  // list->clear();

  // cout << "当前表长：" << list->size() << endl;
  // cout << "是否为空：" << list->isEmpty() << endl;

  // for (int i = 0; i < list->size(); i++)
  // {
  //   cout << list->get(i) << ' ';
  // }

  // cout << endl;

  // * test case by bubble sort
  Vector<int> *list = new Vector<int>();

  // list->push(4);
  // list->push(1);
  // list->push(3);
  // list->push(1);
  // list->push(9);
  // list->push(-2);
  // list->push(5);
  // cout << list->size() << endl;
  // cout << "原数组";
  // for (int i = 0; i < list->size(); i++)
  // {
  //   cout << list->get(i) << ' ';
  // }
  // cout << endl;

  // list->algo_bubbleSort();

  // cout << "排序后";
  // for (int i = 0; i < list->size(); i++)
  // {
  //   cout << list->get(i) << ' ';
  // }
  // cout << endl;

  int len = 100000;
  time_t t;
  srandom((int)time(&t));

  for (int i = 0; i < len; i++)
  {
    list->push(rand() % 100000);
  }
  cout << "Finished!" << endl;

  clock_t start, end;

  start = clock();
  list->algo_bubbleSort();
  end = clock();

  cout << (end - start) / 1000.0 << endl;
}
