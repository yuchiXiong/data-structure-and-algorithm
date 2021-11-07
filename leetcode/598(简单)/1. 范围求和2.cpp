#include <iostream>
using namespace std;

int maxCount(int m, int n, int **ops, int opsSize, int *opsColSize)
{

  if (opsSize == 0)
    return m * n;

  int minM = ops[0][0];
  int minN = ops[0][1];

  for (int i = 0; i < opsSize; i++)
  {
    if (minM > ops[i][0])
    {
      minM = ops[i][0];
    }
    if (minN > ops[i][1])
    {
      minN = ops[i][1];
    }
  }

  return minM * minN;
}

int main()
{
  int m = 3, n = 3, opsSize = 2, opsColSize = 2;
  int ops[opsSize][opsColSize] = {{2, 2}, {3, 3}};

  int *p[opsSize];
  for (int i = 0; i < opsSize; i++)
  {
    p[i] = ops[i];
  }

  cout << maxCount(m, n, p, opsSize, &opsColSize) << endl;

  // int m = 1, n = 1, opsSize = 1, opsColSize = 1;
  // int ops[opsSize][opsColSize] = {{1, 1}};

  // int *p[opsSize];
  // for (int i = 0; i < opsSize; i++)
  // {
  //   p[i] = ops[i];
  // }

  // cout << maxCount(m, n, p, opsSize, &opsColSize) << endl;
}