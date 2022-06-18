#include "iostream"
using namespace std;

class Solution
{
public:
  bool isValid(string s)
  {
    int hash[s.length()];
    int len = 0;

    for (int i = 0; i < s.length(); i++)
    {
      if ((s[i] == ')' || s[i] == ']' || s[i] == '}') && len == 0)
        return false;
      switch (s[i])
      {
      case '(':
        hash[len++] = s[i];
        break;
      case '[':
        hash[len++] = s[i];
        break;
      case '{':
        hash[len++] = s[i];
        break;
      case ')':
        if (hash[--len] != '(')
          return false;
        break;
      case ']':
        if (hash[--len] != '[')
          return false;
        break;
      case '}':
        if (hash[--len] != '{')
          return false;
        break;
      }
    }

    return len == 0;
  }
};

int main()
{
  Solution *s = new Solution();

  cout << (s->isValid("[") ? "true" : "false") << endl;      // false
  cout << (s->isValid("]") ? "true" : "false") << endl;      // false
  cout << (s->isValid("()") ? "true" : "false") << endl;     // true
  cout << (s->isValid("()[]{}") ? "true" : "false") << endl; // true
  cout << (s->isValid("(]") ? "true" : "false") << endl;     // false
  cout << (s->isValid("([)]") ? "true" : "false") << endl;   // false
  cout << (s->isValid("{[]}") ? "true" : "false") << endl;   // true
}