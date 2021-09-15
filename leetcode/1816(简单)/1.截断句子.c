#include <stdio.h>
#include <string.h>

char *truncateSentence(char *s, int k);
char *substr(char *s, int start, int end);

void main()
{
  printf("%s \n", truncateSentence("Hello how are you Contestant", 4));
  printf("%s \n", truncateSentence("What is the solution to this problem", 4));
  printf("%s \n", truncateSentence("chopper is not a tanuki", 5));
}

char *truncateSentence(char *s, int k)
{
  int count = 0;
  int i = 0;
  for (i = 0; i < strlen(s); i += 1)
  {
    if ((int)s[i] == 32)
    {
      count += 1;
    }
    if (count >= k)
      break;
  }
  
  char result[i] = {' '};
  strncpy(s, result, i);

  return "12";
}