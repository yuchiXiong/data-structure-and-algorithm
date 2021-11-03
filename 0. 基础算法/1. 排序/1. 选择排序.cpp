#include <iostream>
#include <stdlib.h>
#include <time.h>
using namespace std;

void selectSort(int *arr, int len)
{
  for (int i = 0; i < len; i++)
  {
    int max = arr[0];
    int maxIndex = 0;

    for (int j = 0; j < len - i; j++)
    {
      if (arr[j] > max)
      {
        max = arr[j];
        maxIndex = j;
      }
    }

    int tmp = arr[len - i - 1];
    arr[len - i - 1] = max;
    arr[maxIndex] = tmp;
  }
}

int main()
{
  int len = 20;
  int arr1[len];
  time_t t;

  srand((unsigned)time(&t));

  for (int i = 0; i < len; i++)
  {
    arr1[i] = rand() % 256;
  }

  selectSort(arr1, len);

  for (int i = 0; i < len; i++)
  {
    cout << arr1[i] << ' ';
  }

  cout << endl;

  return 0;
}