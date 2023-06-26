int pivotInteger(int n)
{
  int sum = 0;
  for (int i = 1; i <= n; i += 1)
  {
    sum += i;
  }

  int cur_sum = 0;
  for (int i = 1; i <= n; i += 1)
  {
    if (cur_sum == sum - cur_sum - i)
      return i;
    if (cur_sum > sum - cur_sum - i)
      return -1;
    cur_sum += i;
  }

  return -1;
}