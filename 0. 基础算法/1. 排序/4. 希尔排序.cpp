#include <iostream>
#include "../../tools/tools.cpp"
using namespace std;

void shells_sort(int *list, int size)
{
  int incre = size / 100;
  while (incre > 0)
  {
    for (int i = 1; i < size; i += incre)
    {
      int current = list[i];
      int j = i;
      for (; j > 0 && current < list[j - incre]; j -= incre)
      {
        list[j] = list[j - incre];
      }
      list[j] = current;
    }
    incre /= 100;
  }
};

int main()
{
  int size = 900000;
  int *arr = ArrayTools::random(size);

  // cout << "原始数组" << endl;
  // ArrayTools::prinf_arr(arr, size);
  clock_t start, end;

  start = clock();
  shells_sort(arr, size);
  end = clock();

  cout << (end - start) / 1000.0 << endl;

  // cout << "排序后" << endl;
  // ArrayTools::prinf_arr(arr, size);
  return 0;
}