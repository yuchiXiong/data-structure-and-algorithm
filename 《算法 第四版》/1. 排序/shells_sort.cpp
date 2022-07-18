#include <iostream>
#include "../../tools/tools.cpp"
using namespace std;

/**
 * 希尔排序
 * 希尔排序是插入排序的一种更高效的改进版本。
 * note1:
 *  希尔排序是以n为增量的插入排序，在插入排序中，每次从对一个大于2的数组做插入排序时需要遍历多次，但如果数组只有2个元素，则只需要一次对比
 * 
 */
void shells_sort(int *list, int size)
{
  int incre = size / 2;
  while (incre > 0)
  {
    for (int i = incre; i < size; i++)
    {
      int current = list[i];
      int j = i;
      for (; j > 0 && current < list[j - incre]; j -= incre)
      {
        list[j] = list[j - incre];
      }
      list[j] = current;
    }
    incre /= 2;
  }
};

int main()
{
  int size = 100000;
  int *arr = ArrayTools::random(size);

  clock_t start, end;

  start = clock();
  shells_sort(arr, size);
  end = clock();

  cout << (end - start) / 1000.0 << endl;

  return 0;
}