#include <iostream>
using namespace std;

int maxSubArray(int *nums, int numsSize)
{
  int result = 0;
  for (int i = 0; i < numsSize; i += 1)
  {
    if (result > 0)
      result += nums[i];
    else
      result = nums[i];

    result = result > nums[i] ? result : nums[i];
    cout << result << ' ';
  }
  cout << endl;
  return result;
}

int main()
{
  int caseArr1[] = {-2, 1, -3, 4, -1, 2, 1, -5, 4};
  int caseArr2[] = {1};
  int caseArr3[] = {0};
  int caseArr4[] = {-1};
  int caseArr5[] = {-100000};

  cout << maxSubArray(caseArr1, 9) << endl; // 6
  cout << maxSubArray(caseArr2, 1) << endl; // 1
  cout << maxSubArray(caseArr3, 1) << endl; // 0
  cout << maxSubArray(caseArr4, 1) << endl; // -1
  cout << maxSubArray(caseArr5, 1) << endl; // -100000
}