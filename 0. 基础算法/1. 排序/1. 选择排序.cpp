#include <iostream>
#include "../../tools/tools.cpp"
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

    BasicTools::swap(arr[len - i - 1], arr[maxIndex]);
  }
}

int main()
{
  int len = 100000;
  int *arr = ArrayTools::random(len);

  clock_t start, end;

  start = clock();
  selectSort(arr, len);
  end = clock();

  cout << (end - start) / 1000.0 << endl;

  return 0;
}