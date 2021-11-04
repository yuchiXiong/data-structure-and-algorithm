#include <iostream>
#include <time.h>
using namespace std;

void bubbleSort(int *arr, int len)
{
  for (int i = 0; i < len; i++)
  {
    for (int j = 0; j < len - i; j++)
    {
      if (arr[j] > arr[j + 1])
      {
        int tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
}

int main()
{

  int len = 10;
  int arr[len];
  time_t t;

  srandom((unsigned)t);

  for (int i = 0; i < len; i++)
  {
    arr[i] = rand() % 100;
  }

  cout << "原数组：";
  for (int i = 0; i < len; i++)
  {
    cout << arr[i] << ' ';
  }
  cout << endl;

  bubbleSort(arr, len);

  cout << "排序后：";
  for (int i = 0; i < len; i++)
  {
    cout << arr[i] << ' ';
  }

  cout << endl;

  return 0;
}