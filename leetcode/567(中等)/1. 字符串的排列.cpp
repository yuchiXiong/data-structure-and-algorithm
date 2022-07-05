#include "iostream"
using namespace std;

class Solution
{
public:
  bool checkInclusion(string s1, string s2)
  {
    int s1hash[26] = {0};
    for (int i = 0; i < s1.size(); i++)
    {
      s1hash[s1[i] - 'a']++;
    }

    int s2hash[26] = {0};
    for (int i = 0; i < s2.size() - s1.size(); i++)
    {
      if (i < s1.size())
      {
        s2hash[s2[i] - 'a']++;
      }
      else
      {
        s2hash[s2[i] - 'a']++;
        s2hash[s2[i - s1.size()] - 'a']--;
      }
      for (int j = 0; j < 26; j++)
      {
        if (s1hash[j] != s2hash[j])
          break;

        if (j == 25)
          return true;
      }
    }

    return false;
  }
};