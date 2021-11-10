#include <iostream>
using namespace std;

int findPoisonedDuration(int *timeSeries, int timeSeriesSize, int duration)
{
  int result = 0;
  for (int i = 1; i < timeSeriesSize; i++)
  {
    if (timeSeries[i] - timeSeries[i - 1] - 1 >= duration)
    {
      result += duration;
    }
    else
    {
      result += timeSeries[i] - timeSeries[i - 1];
    }
  }
  return result + duration;
}

int main()
{
  int case1[2] = {1, 4}, duration1 = 2;
  int case2[2] = {1, 2}, duration2 = 2;

  cout << findPoisonedDuration(case1, 2, duration1) << endl; // 4
  cout << findPoisonedDuration(case2, 2, duration2) << endl; // 3
}