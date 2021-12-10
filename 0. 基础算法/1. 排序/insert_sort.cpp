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
      list[j] = list[j - 1];
    }
    list[j] = current;
  }
}

int main()
{
  int size = 100000;
  int *arr;
  arr = ArrayTools::random(size);

  clock_t start, end;

  start = clock();
  insert_sort(arr, size);
  end = clock();

  cout << (end - start) / 1000.0 << endl;

  return 0;
}
