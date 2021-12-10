#include <iostream>
#include <time.h>
#include <stdlib.h>
using namespace std;

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
  static void print(T *t, int size)
  {
    for (int i = 0; i < size; i++)
    {
      cout << t[i] << ' ';
    }
    cout << endl;
  }
};
