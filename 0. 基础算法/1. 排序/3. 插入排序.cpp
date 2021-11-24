#include <iostream>
#include "../../tools/tools.cpp"
using namespace std;

template <typename T>
void insert_sort(T *list, int size)
{
  for (int i = 0; i < size; i++)
  {
    for (int j = i; j > 0 && list[j] < list[j - 1]; j--)
    {
      BasicTools::swap(list[j], list[j - 1]);
    }
  }
}

int main()
{
  int *arr;
  arr = ArrayTools::random(20);

  cout << "原始数组" << endl;
  ArrayTools::prinf_arr(arr, 20);

  insert_sort(arr, 20);

  cout << "排序后" << endl;
  ArrayTools::prinf_arr(arr, 20);

  return 0;
}
