#include <iostream>
#include "../../tools/tools.cpp"
using namespace std;

void shells_sort(int *list, int size)
{
  int incre = size / 3;
  while (incre > 0)
  {
    for (int i = 0; i < size; i += incre)
    {
      for (int j = i; j > 0 && list[j] < list[j - incre]; j--)
      {
        BasicTools::swap(list[j], list[j - incre]);
      }
    }
    incre /= 3;
  }
};

int main()
{
  int size = 100000;
  int *arr = ArrayTools::random(size);

  // cout << "原始数组" << endl;
  // ArrayTools::prinf_arr(arr, size);

  shells_sort(arr, size);

  // cout << "排序后" << endl;
  // ArrayTools::prinf_arr(arr, size);
  return 0;
}