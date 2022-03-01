#include <iostream>
using namespace std;

class String
{
private:
  char *_str;
  int _len;

public:
  String(char *str = NULL)
  {
    _str = str;
    char *p = str;
    while (*p != '\0')
    {
      _len++;
      p++;
    }
  }
  int length()
  {
    return _len;
  }
  friend ostream &operator<<(ostream &output,
                             const String *D)
  {
    output << D->_str;
    return output;
  }
  int indexOf_BF(const char *pattern)
  {
    int result = -1;
    for (int i = 0; i < _len; i++)
    {
      int i_dup = i;
      if (_str[i] == pattern[0])
      {
        int j = 1;
        while (pattern[j] != '\0' && _str[i + 1] == pattern[j])
        {
          i++;
          j++;
        }
        if (pattern[j] == '\0')
        {
          result = i + 1 - j;
          break;
        }
        else
        {
          i = i_dup;
        }
      }
    }
    return result;
  }
};

int main()
{
  char str[] = "Hello World";
  String *s = new String(str);

  // cout << s << endl;
  // cout << s->length() << endl;

  cout << s->indexOf_BF("el") << endl;  // 1
  cout << s->indexOf_BF("lo") << endl;  // 3
  cout << s->indexOf_BF("rl") << endl;  // 8
  cout << s->indexOf_BF("ld") << endl;  // 9
  cout << s->indexOf_BF("rld") << endl; // 8
}