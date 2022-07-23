#include "iostream"
using namespace std;

class Solution
{
public:
  int maxNumberOfBalloons(string text)
  {
    int hash[112] = {0};
    for (int i = 0; i < text.size(); i++)
    {
      switch (text[i])
      {
      case 'b':
        hash[text[i]] += 2;
        break;
      case 'a':
        hash[text[i]] += 2;
        break;
      case 'l':
        hash[text[i]] += 1;
        break;
      case 'o':
        hash[text[i]] += 1;
        break;
      case 'n':
        hash[text[i]] += 2;
        break;
      default:
        break;
      }
    }

    int ans = hash['a'];
    for (int i = 0; i < 5; i++)
    {
      ans = ans < hash["balon"[i]] ? ans : hash["balon"[i]];
    }

    return ans / 2;
  }
};

int main()
{
  Solution s;
  cout << s.maxNumberOfBalloons("nlaebolko") << endl;
  cout << s.maxNumberOfBalloons("loonbalxballpoon") << endl;
  cout << s.maxNumberOfBalloons("leetcode") << endl;
}