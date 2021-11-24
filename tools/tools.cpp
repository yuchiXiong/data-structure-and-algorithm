#include <iostream>
#include <time.h>
#include <stdlib.h>
using namespace std;

class BasicTools
{
public:
  template <typename T>
  static void swap(T &a, T &b)
  {
    T temp = a;
    a = b;
    b = temp;
  }
};

class ArrayTools
{
public:
  static int *random(int size)
  {
    int *arr = new int[size];
    time_t t;
    srandom((unsigned)time(&t));
    for (int i = 0; i < size; i++)
    {
      arr[i] = rand() % 100;
    }
    return arr;
  }
  template <typename T>
  static void prinf_arr(T *t, int size)
  {
    for (int i = 0; i < size; i++)
    {
      cout << t[i] << ' ';
    }
    cout << endl;
  }
};
