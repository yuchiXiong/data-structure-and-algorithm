#include <iostream>
#include "../../tools/tools.cpp"
using namespace std;

/**
 * 在选择排序中，每次选择最小的元素，放在最前面。
 * note1:
 *  不应该选择最大的元素，放在最后面，因为已经排序好了，不需要再参与
 */
void selectSort(int *arr, int len)
{
  for (int i = 0; i < len; i++)
  {
    int min = i;
    for (int j = i; j < len; j++)
    {
      if (arr[j] < arr[min])
      {
        min = j;
      }
    }

    BasicTools::swap(arr[i], arr[min]);
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