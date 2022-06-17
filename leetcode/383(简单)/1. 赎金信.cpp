#include "iostream"
using namespace std;

class Solution
{
public:
  bool canConstruct(string ransomNote, string magazine)
  {
    if (ransomNote.size() > magazine.size())
      return false;

    int magazineHash[26] = {0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0};

    for (int i = 0; i < magazine.size(); i++)
    {
      magazineHash[magazine[i] - 'a'] = magazineHash[magazine[i] - 'a'] + 1;
    }

    for (int i = 0; i < ransomNote.size(); i++)
    {
      if (magazineHash[ransomNote[i] - 'a'] == 0)
        return false;
      magazineHash[ransomNote[i] - 'a']--;
    }

    return true;
  }
};

int main()
{
  Solution *s = new Solution();

  cout << (s->canConstruct("a", "b") ? "true" : "false") << endl;                                 // false
  cout << (s->canConstruct("aa", "ab") ? "true" : "false") << endl;                               // false
  cout << (s->canConstruct("aa", "aab") ? "true" : "false") << endl;                              // true
  cout << (s->canConstruct("fihjjjjei", "hjibagacbhadfaefdjaeaebgi") ? "true" : "false") << endl; // false
}