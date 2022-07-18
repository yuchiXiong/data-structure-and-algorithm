#include <iostream>
#include <time.h>
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

    int tmp = arr[len - i - 1];
    arr[len - i - 1] = max;
    arr[maxIndex] = tmp;
  }
}

int binarySearch(int *arr, int len, int target)
{
  int left = 0, right = len - 1, result = -1;

  while (left <= right)
  {
    int mid = (left + right) / 2;

    if (arr[mid] > target)
    {
      right = mid - 1;
    }
    else if (arr[mid] < target)
    {
      left = mid + 1;
    }
    else
    {
      result = mid;
      break;
    }
  }

  return result;
}

int main()
{

  int len = 20;
  int arr[len];
  time_t t;

  srandom((unsigned)time(&t));

  for (int i = 0; i < len; i++)
  {
    arr[i] = rand() % 100;
  }

  selectSort(arr, len);

  for (int i = 0; i < len; i++)
  {
    cout << arr[i] << ' ';
  }
  cout << endl;

  int target = rand() % (len - 1);

  cout << "target: " << target;

  cout << endl;

  cout << binarySearch(arr, len, arr[target]);

  cout << endl;
  return 0;
}