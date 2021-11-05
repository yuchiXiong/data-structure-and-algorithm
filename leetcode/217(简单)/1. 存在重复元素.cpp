#include <iostream>
using namespace std;

bool containsDuplicate(int *nums, int numsSize)
{
  if (numsSize < 2)
  {
    return false;
  }

  int MAX = 20000;
  int hash[MAX];
  bool result = false;

  for (int i = 0; i < MAX; i++)
  {
    hash[i] = 0;
  }

  for (int i = 0; i < numsSize; i++)
  {
    if (hash[nums[i] + 1000] == 0)
    {
      hash[nums[i] + 1000] = 1;
    }
    else
    {
      result = true;
      break;
    }
  }

  return result;
}

int main()
{
  int caseArr1[] = {1, 2, 3, 1};
  int caseArr2[] = {1, 2, 3, 4};
  int caseArr3[] = {1, 1, 1, 3, 3, 4, 3, 2, 4, 2};
  int caseArr4[] = {3, 1};
  int caseArr5[] = {1, 5, -2, -4, 0};

  // cout << containsDuplicate(caseArr1, 4) << endl;  // 1
  // cout << containsDuplicate(caseArr2, 4) << endl;  // 0
  // cout << containsDuplicate(caseArr3, 10) << endl; // 1
  // cout << containsDuplicate(caseArr4, 2) << endl;  // 0
  cout << containsDuplicate(caseArr5, 5) << endl; // 0

  return 0;
}