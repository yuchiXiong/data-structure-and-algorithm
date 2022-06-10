/**
 * @file 1. 比较含退格的字符串.cpp
 * @author yuchiXiong (yuchi.xiong@foxmail.com)
 * @brief 这个版本尝试原地进行字符串的缩减，但目前来看它是错误的！
 * @version 0.1
 * @date 2022-06-10
 *
 * @copyright Copyright (c) 2022
 *
 */
#include "iostream"
using namespace std;

class Solution
{
public:
  bool backspaceCompare(string s, string t)
  {
    return get_result(s) == get_result(t);
  }

  string get_result(string s)
  {
    int j = -1;
    for (int i = 0; i < s.size(); i++)
    {
      if (s[i] == '#')
      {
        j == -1 && (i == 0 ? j = 0 : j = i - 1);
        s[i] = ' ';
        s[j--] = ' ';
      }
    }
    cout << s << endl;
    return s;
  }
};

int main()
{
  Solution *s = new Solution();
  cout << s->backspaceCompare("xywrrmp", "xywrrmu#p") << endl;

  return 0;
}
