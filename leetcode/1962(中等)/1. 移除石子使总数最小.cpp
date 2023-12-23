class Solution
{
public:
  int minStoneSum(vector<int> &piles, int k)
  {
    priority_queue<int> pq;

    for (int i = 0; i < piles.size(); i++)
    {
      pq.push(piles[i]);
    }

    for (int i = 0; i < k; i++)
    {
      int max = pq.top();
      pq.pop();
      pq.push(max - max / 2);
    }

    int result = 0;
    for (int i = 0; i < piles.size(); i++)
    {
      int max = pq.top();
      pq.pop();
      result += max;
    }

    return result;
  }
};