#include <iostream>
using namespace std;

int missingNumber(int *nums, int numsSize)
{
  int sum = 0;
  for (int i = 0; i < numsSize; i++)
    sum += nums[i];

  return (1 + numsSize) * numsSize / 2 - sum;
}

int main()
{
  int arr1[] = {3, 0, 1};
  int arr2[] = {0, 1};
  int arr3[] = {9, 6, 4, 2, 3, 5, 7, 0, 1};
  int arr4[] = {0};
  cout << missingNumber(arr1, 3) << endl;
  cout << missingNumber(arr2, 2) << endl;
  cout << missingNumber(arr3, 9) << endl;
  cout << missingNumber(arr4, 1) << endl;
  return 0;
}