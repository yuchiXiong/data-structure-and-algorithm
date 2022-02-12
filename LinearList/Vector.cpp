
/**
 * @file Vector.cpp
 * @author yuchiXiong (yuchi.xiong@foxmail.com)
 * @brief 基于顺序表（数组）实现的可动态扩容的线性容器，除常见容器操作外，还额外增加了多种排序算法实现。
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
  T *_aux;
  int _insertSortSize;

public:
  Vector()
  {
    _size = 0;
    _maxSize = 10;
    _list = new T[10];
    _insertSortSize = 15;
  }
  void push(T value)
  {
    insert(_size, value);
  }
  void insert(int index, T value)
  {
    if (_size + 1 >= _maxSize)
    {
      T *oldList = _list;
      _list = new T[_maxSize *= 2];
      copy(oldList, oldList + _size, _list);
      delete[] oldList;
      oldList = NULL;
    }
    copy_backward(_list + index, _list + _size, _list + _size + 1);
    _list[index] = value;
    _size++;
  }
  void set(int index, T value)
  {
    _list[index] = value;
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

  void algo_shuffle()
  {
    algo_shuffle(0, _size - 1);
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
  void algo_selectSort()
  {
    algo_selectSort(0, _size - 1);
  }
  void algo_insertSort() {}

  void algo_mergeSort()
  {
    _aux = new T[_size];
    copy(_list, _list + _size, _aux);
    algo_mergeSort(0, _size - 1);
    delete _aux;
  }
  void algo_quickSort()
  {
    algo_shuffle(0, _size - 1);
    algo_quickSort(0, _size - 1);
  }

private:
  void algo_shuffle(int low, int high)
  {
    for (int i = high - 1; i > low; i--)
    {
      int r = rand() % (high - i);
      swap(_list[i], _list[r]);
    }
  }
  void algo_selectSort(int low, int high)
  {
    for (int i = low; i <= high; i++)
    {
      int min = i;
      for (int j = i; j <= high; j++)
      {
        if (_list[min] > _list[j])
          min = j;
      }
      swap(_list[i], _list[min]);
    }
  }
  void algo_insertSort(int low, int high) {}
  void algo_mergeSort(int low, int high)
  {
    if (_size <= _insertSortSize)
    {
      algo_insertSort();
      return;
    }
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
    for (int i = low; i <= high; i++)
    {
      _aux[i] = _list[i];
    }

    for (int k = low; k <= high; k++)
    {
      if (i > mid)
      {
        _list[k] = _aux[j++];
      }
      else if (j > high)
      {
        _list[k] = _aux[i++];
      }
      else if (_aux[i] > _aux[j])
      {
        _list[k] = _aux[j++];
      }
      else
      {
        _list[k] = _aux[i++];
      }
    }
  }
  void algo_quickSort(int low, int high)
  {
    if (high - low + 1 <= _insertSortSize)
    {
      algo_insertSort(low, high);
      return;
    }
    if (high <= low)
      return;
    int left = low, right = high, v = _list[low], i = low;
    while (i <= right)
    {
      if (_list[i] < v)
      {
        swap(_list[i++], _list[left++]);
      }
      else if (_list[i] > v)
      {
        swap(_list[i], _list[right--]);
      }
      else
      {
        i++;
      }
    }
    algo_quickSort(low, left - 1);
    algo_quickSort(right + 1, high);
  }
};

int main()
{
  Vector<int> *list = new Vector<int>();

  // * 一个用于对比归并排序和快速排序的例子
  int len = 5000000;
  time_t t;
  srandom((int)time(&t));

  for (int i = 0; i < len; i++)
  {
    list->push(rand() % 100000000);
  }

  cout << "Random Finished!" << endl;

  clock_t start, end;

  cout << "quick sort: ";
  start = clock();
  list->algo_quickSort();
  end = clock();
  cout << (end - start) / 1000.0 << " ms" << endl;

  for (int i = 0; i < len; i++)
  {
    list->push(rand() % 100000000);
  }

  cout << "merge sort: ";
  start = clock();
  list->algo_mergeSort();
  end = clock();
  cout << (end - start) / 1000.0 << " ms" << endl;

  // cout << "insert sort: ";
  // start = clock();
  // list->algo_insertSort();
  // end = clock();

  // cout << (end - start) / 1000.0 << " ms" << endl;

  // cout << "bubble sort: ";
  // start = clock();
  // list->algo_bubbleSort();
  // end = clock();

  // cout << (end - start) / 1000.0 << " ms" << endl;
}

// int main()
// {
//   Vector<string> *list = new Vector<string>();
//   list->insert(0, "a");                // a
//   list->insert(0, "b");                // b a
//   list->insert(1, "c");                // b c a
//   list->insert(3, "d");                // b c a d
//   list->insert(list->size() - 2, "j"); // b c j a d
//   list->push("e");                     // b c j a d e
//   list->push("g");                     // b c j a d e g
//   list->insert(list->size() - 1, "f"); // b c j a d e f g
//   list->insert(list->size() - 1, "h"); // b c j a d e f h g
//   list->insert(list->size(), "i");     // b c j a d e f h g i
//   list->insert(list->size(), "-");     // b c j a d e f h g i -
//   list->insert(list->size() - 2, "j"); // b c j a d e f h g j i -
//   list->push("|1");
//   list->push("|2");
//   list->push("|3");
//   list->push("|4");
//   list->push("|5");
//   list->push("|6");
//   list->push("|7");
//   list->push("|8");
//   list->push("|9");
//   list->insert(list->size() - 4, "|10");

//   cout << "size: " << list->size() << endl;
//   for (int i = 0; i < list->size(); i++)
//   {
//     cout << list->get(i) << " ";
//   }
//   cout << endl;
// }