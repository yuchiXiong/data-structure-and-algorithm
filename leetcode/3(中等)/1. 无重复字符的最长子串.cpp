#include "iostream"
#include "vector"
using namespace std;

class Solution
{
public:
  int lengthOfLongestSubstring(string s)
  {
    int i = 0, j = 0, ans = 0;
    vector<int> hash = vector<int>(256, -1);

    while (i < s.size())
    {
      if (hash[s[i]] != -1)
      {
        j = hash[s[i]] + 1 > j ? hash[s[i]] + 1 : j;
      }

      ans = ans > i - j + 1 ? ans : i - j + 1;
      hash[s[i]] = i;
      i++;
    }

    return ans;
  }
};

int main()
{
  Solution *s = new Solution();

  string s1 = "abcabcbb";
  cout << s->lengthOfLongestSubstring(s1) << endl; // 3

  string s2 = "dvdf";
  cout << s->lengthOfLongestSubstring(s2) << endl; // 3

  string s3 = "aab";
  cout << s->lengthOfLongestSubstring(s3) << endl; // 2

  string s4 = "pwwkew";
  cout << s->lengthOfLongestSubstring(s4) << endl; // 3

  string s5 = "abba";
  cout << s->lengthOfLongestSubstring(s5) << endl; // 2
}