#include <iostream>
using namespace std;

int longestSubsequence(int *arr, int arrSize, int difference)
{
  const int MAX_SIZE = 40001;
  int hash[MAX_SIZE];

  for (int i = 0; i < MAX_SIZE; i++)
  {
    hash[i] = 0;
  }

  for (int i = 0; i < arrSize; i++)
  {
    hash[arr[i] + 20000] = hash[arr[i] - difference + 20000] + 1;
  }

  int result = 1;

  for (int i = 0; i < MAX_SIZE; i++)
  {
    if (hash[i] > result)
      result = hash[i];
  }

  return result;
}

/**
 * 1 2 3 4 diff = 1
 * 
 * hash[1] = (hash[1 - 1] || 0) + 1 = 1
 * hash[2] = (hash[2 - 1] || 0) + 1 = 2
 * hash[3] = (hash[3 - 1] || 0) + 1 = 3
 * hash[4] = (hash[4 - 1] || 0) + 1 = 4
 * 
 * 1 3 5 7 diff = 1
 * hash[1] = (hash[1 - 1] || 0) + 1 = 1
 * hash[3] = (hash[3 - 1] || 0) + 1 = 1
 * hash[5] = (hash[5 - 1] || 0) + 1 = 1
 * hash[7] = (hash[7 - 1] || 0) + 1 = 1
 * 
 * 1 5 7 8 5 3 4 2 1 diff = -2
 * hash[1] = (hash[1 + 2] || 0) + 1 = 1
 * hash[5] = (hash[5 + 2] || 0) + 1 = 1
 * hash[7] = (hash[7 + 2] || 0) + 1 = 1
 * hash[8] = (hash[8 + 2] || 0) + 1 = 1
 * hash[5] = (hash[5 + 2] || 0) + 1 = 2
 * hash[3] = (hash[3 + 2] || 0) + 1 = 3
 * hash[4] = (hash[4 + 2] || 0) + 1 = 1
 * hash[2] = (hash[2 + 2] || 0) + 1 = 2
 * hash[1] = (hash[1 + 2] || 0) + 1 = 4
 * 
 * 3 4 -3 -2 -4 diff = -5
 * hash[3] = (hash[3 + 5] || 0) + 1 = 1
 * hash[4] = (hash[4 + 5] || 0) + 1 = 1
 * hash[-3] = (hash[-3 + 5] || 0) + 1 = 1
 * hash[-2] = (hash[-2 + 5] || 0) + 1 = 2
 * hash[-4] = (hash[-4 + 5] || 0) + 1 = 1
 **/
int main()
{
  int arr1[] = {1, 2, 3, 4};
  int diff1 = 1;

  int arr2[] = {1, 3, 5, 7};
  int diff2 = 1;

  int arr3[] = {1, 5, 7, 8, 5, 3, 4, 2, 1};
  int diff3 = -2;

  int arr4[] = {3, 4, -3, -2, -4};
  int diff4 = -5;

  cout << longestSubsequence(arr1, 4, diff1) << endl; // 4
  cout << longestSubsequence(arr2, 4, diff2) << endl; // 1
  cout << longestSubsequence(arr3, 9, diff3) << endl; // 4
  cout << longestSubsequence(arr4, 5, diff4) << endl; // 2

  return 0;
}