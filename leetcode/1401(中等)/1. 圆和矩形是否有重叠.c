bool checkOverlap(int radius, int xCenter, int yCenter, int x1, int y1, int x2, int y2)
{
  for (int i = x1; i <= x2; i += 1)
  {
    for (int j = y1; j <= y2; j += 1)
    {
      double len = sqrt(pow(abs(xCenter - i), 2) + pow(abs(yCenter - j), 2));

      if (len <= radius)
        return true;
    }
  }

  return false;
}