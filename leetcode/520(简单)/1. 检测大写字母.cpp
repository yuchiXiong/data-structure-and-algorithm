#include <iostream>
using namespace std;

// a-97 A-65
bool detectCapitalUse(char *word)
{
  int count = 0;
  int firstCharCode = word[0] + 0;
  int i = 0;

  while (word[i] != '\0')
  {
    int current = word[i] + 0;
    if (current >= 65 && current <= 91)
      count++;
    i++;
  }

  if (firstCharCode >= 65 && firstCharCode <= 91)
  {
    return count == 1 || count == i;
  }
  else
  {
    return count == 0;
  }
}

int main()
{
  char char1[] = "USA", char2[] = "FLaG", char3[] = "g";
  // cout << detectCapitalUse(char1) << '-' << true << endl;  // true
  // cout << detectCapitalUse(char2) << '-' << false << endl; // false
  cout << detectCapitalUse(char3) << '-' << true << endl; // true
}