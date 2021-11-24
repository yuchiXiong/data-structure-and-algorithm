#include <iostream>
#include "../../tools/tools.cpp"
using namespace std;

void bubbleSort(int *arr, int len)
{
  for (int i = 0; i < len; i++)
  {
    for (int j = 0; j < len - i - 1; j++)
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

  int size = 100000;
  int *arr = ArrayTools::random(size);

  clock_t start, end;

  start = clock();
  bubbleSort(arr, size);
  end = clock();

  cout << (end - start) / 1000.0 << endl;

  return 0;
}