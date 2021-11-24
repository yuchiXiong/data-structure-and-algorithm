#include <iostream>
#include "../../tools/tools.cpp"
using namespace std;

template <typename T>
void insert_sort(T *list, int size)
{
  for (int i = 1; i < size; i++)
  {
    int current = list[i];
    int j = i;
    for (; j > 0 && current < list[j - 1]; j--)
    {
      // BasicTools::swap(list[j], list[j - 1]);
      list[j + 1] = list[j];
    }
    ArrayTools::prinf_arr(list, size);

    list[j + 1] = current;
  }
}

int main()
{
  int size = 10;
  int *arr;
  arr = ArrayTools::random(size);

  clock_t start, end;

  ArrayTools::prinf_arr(arr, size);

  start = clock();
  insert_sort(arr, size);
  // InsertSort(arr, size);
  end = clock();
  // ArrayTools::prinf_arr(arr, size);

  cout << (end - start) / 1000.0 << endl;

  return 0;
}
