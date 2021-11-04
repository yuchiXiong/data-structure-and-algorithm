#include "stdio.h"

// 官方题解：二分查找
bool isPerfectSquare(int num)
{
  int left = 0, right = num;

  while (left <= right)
  {
    long mid = (left + right) / 2;
    if (mid * mid == num)
    {
      return true;
    }
    else if (mid * mid > num)
    {
      right = mid - 1;
    }
    else
    {
      left = mid + 1;
    }
  }
  return false;
}

// 大佬的代码，降维打击
// 然并卵，还是超时23333
// bool isPerfectSquare(int num)
// {
//   if (num == 1)
//     return true;
//   bool result = false;
//   int sum = 0;
//   for (int i = 0; i <= num / 2; i += 1)
//   {
//     sum += i * 2 + 1;
//     if (sum == num)
//     {
//       result = true;
//       break;
//     }
//   }
//   return result;
// }

// 我的垃圾代码：遍历，找到平方差
// bool isPerfectSquare(int num)
// {
//   if (num == 1)
//     return true;
//   bool result = false;
//   for (int i = 0; i <= num / 2; i++)
//   {
//     if (i * i == num)
//     {
//       result = true;
//       break;
//     }
//   }
//
//   return result;
// }

int main()
{
  if (isPerfectSquare(121))
  {
    printf("true");
  }
  else
  {
    printf("false");
  }
  return 0;
}