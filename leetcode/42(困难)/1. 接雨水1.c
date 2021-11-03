#include "stdio.h"

/**
 * 解法1: 按行计算每行的空隙，最终得到蓄水量 
 * 复杂度: m * n, m 为最高的一列的高度，n 为列数
 * 结果: 超时
 **/
// int max(int *arr, int len)
// {
//   int maxValue = arr[1];
//   for (int i = 0; i < len; i += 1)
//   {
//     if (maxValue < arr[i])
//       maxValue = arr[i];
//   }
//   return maxValue;
// }

// int trap(int *height, int heightSize)
// {
//   if (heightSize <= 1)
//   {
//     return 0;
//   }
//   int result = 0;
//   int flag = -1;
//   int maxValue = max(height, heightSize);

//   for (int level = 0; level < maxValue; level += 1)
//   {
//     for (int i = 0; i < heightSize; i += 1)
//     {
//       if (height[i] > 0)
//       {
//         if (flag != -1)
//         {
//           result += i - flag - 1;
//         }

//         flag = i;
//         height[i] = height[i] - 1;
//       }
//     }
//     flag = -1;
//   }

//   return result;
// }

/**
 * 解法2: 按列计算每一列上能够蓄水的数量，需要找到左右两边各自最高的“墙”
 * 复杂度: O(n平方)
 * 结果: 超时
 **/
// int min(int *arr, int len)
// {
//   int minValue = arr[1];
//   for (int i = 1; i < len; i += 1)
//   {
//     if (minValue < arr[i])
//       minValue = arr[i];
//   }
//   return minValue;
// }
// int trap(int *height, int heightSize)
// {
//   int result = 0;
//   for (int i = 1; i < heightSize - 1; i += 1)
//   {
//     int maxLeft = height[i - 1];
//     int maxRight = height[i + 1];

//     for (int j = 0; j < i; j += 1)
//     {
//       if (maxLeft < height[j])
//         maxLeft = height[j];
//     }

//     for (int j = i + 1; j < heightSize; j += 1)
//     {
//       if (maxRight < height[j])
//         maxRight = height[j];
//     }

//     int min = 0;

//     if (maxLeft > maxRight)
//     {
//       min = maxRight;
//     }
//     else
//     {
//       min = maxLeft;
//     }

//     if (min > height[i])
//     {
//       result = result + min - height[i];
//     }
//   }
//   return result;
// }

/**
 * 解法3: 提前计算各位置上左右两边最高的“墙”高度，然后使用解法2的思路
 * 复杂度: O(n)
 * 结果: 通过（4ms/6.7MB）
 **/
int trap(int *height, int heightSize)
{
  int result = 0;
  int maxLeft[heightSize];
  int maxRight[heightSize];

  for (int i = 0; i < heightSize; i += 1)
  {
    if (i == 0)
    {
      maxLeft[i] = height[i];
    }
    else
    {
      if (maxLeft[i - 1] < height[i - 1])
        maxLeft[i] = height[i - 1];
      else
        maxLeft[i] = maxLeft[i - 1];
    }
  }

  for (int i = heightSize - 1; i >= 0; i -= 1)
  {
    if (i == heightSize - 1)
    {
      maxRight[i] = height[i];
    }
    else
    {
      if (maxRight[i + 1] < height[i + 1])
        maxRight[i] = height[i + 1];
      else
        maxRight[i] = maxRight[i + 1];
    }
  }

  for (int i = 0; i < heightSize - 1; i += 1)
  {
    int maxLeftVal = maxLeft[i];
    int maxRightVal = maxRight[i];

    int min = 0;

    if (maxLeftVal > maxRightVal)
    {
      min = maxRightVal;
    }
    else
    {
      min = maxLeftVal;
    }

    if (min > height[i])
    {
      result = result + min - height[i];
    }
  }
  return result;
}

int main()
{
  int height1[] = {0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1};
  printf("可以蓄水： %d\n", trap(height1, 12));

  // 0 0 0 0 0 *
  // * 0 0 0 0 *
  // * 0 0 * 0 *
  // * * 0 * * *
  // * * 0 * * *
  int height2[] = {4, 2, 0, 3, 2, 5};
  printf("可以蓄水： %d\n", trap(height2, 6));
  return 0;
}