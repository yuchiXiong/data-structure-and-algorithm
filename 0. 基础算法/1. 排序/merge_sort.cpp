#include <iostream>
#include "../../tools/tools.cpp"
#include "insert_sort.cpp"
using namespace std;

void merge(int *arr, unsigned lo, unsigned mid, unsigned high)
{
  int aux[high + 1];
  for (unsigned k = lo; k <= high; k++)
  {
    aux[k] = arr[k];
  }

  unsigned i = lo, j = mid + 1;

  for (int k = lo; k <= high; k++)
  {
    if (i >= mid + 1)
    {
      arr[k] = aux[j];
      j++;
    }
    else if (j > high)
    {
      arr[k] = aux[i];
      i++;
    }
    else if (aux[i] > aux[j])
    {
      arr[k] = aux[j];
      j++;
    }
    else
    {
      arr[k] = aux[i];
      i++;
    }
  }
}

void mergeSort(int *arr, unsigned lo, unsigned high)
{
  if (lo >= high)
    return;
  // if (high - lo <= 15)
  // {
  //   insert_sort(arr, high + 1);
  //   return;
  // }

  unsigned mid = lo + (high - lo) / 2;
  mergeSort(arr, lo, mid);
  mergeSort(arr, mid + 1, high);
  merge(arr, lo, mid, high);
}

int main()
{
  int len = 100000;
  int *arr = ArrayTools::random(len);
  clock_t start, end;

  start = clock();
  mergeSort(arr, 0, len - 1);
  end = clock();

  cout << (end - start) / 1000.0 << endl;
}