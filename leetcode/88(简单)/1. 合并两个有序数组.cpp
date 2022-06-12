#include "iostream"
#include "vector"
using namespace std;

class Solution
{
public:
  void merge(vector<int> &nums1, int m, vector<int> &nums2, int n)
  {
    for (int i = m - 1; i >= 0; i--)
    {
      nums1[i + n] = nums1[i];
    }

    int i = n, j = 0, k = 0;

    while (i < m + n || j < n)
    {
      if (i >= m + n)
      {
        nums1[k++] = nums2[j++];
        continue;
      }
      else if (j >= n)
      {
        nums1[k++] = nums1[i++];
        continue;
      }

      if (nums1[i] < nums2[j])
      {
        nums1[k++] = nums1[i];
        i++;
      }
      else
      {
        nums1[k++] = nums2[j];
        j++;
      }
    }
  }

  void merge_2(vector<int> &nums1, int m, vector<int> &nums2, int n)
  {
    int i = m - 1, j = n - 1, k = m + n - 1;

    while (i >= 0 || j >= 0)
    {
      if (i < 0)
      {
        nums1[k--] = nums2[j--];
        i--;
        continue;
      }
      else if (j < 0)
      {
        break;
      }

      if (nums1[i] > nums2[j])
      {
        nums1[k--] = nums1[i--];
      }
      else
      {
        nums1[k--] = nums2[j--];
      }
    }
  }

  void case1()
  {
    vector<int> case1_1 = vector<int>();
    case1_1.push_back(1);
    case1_1.push_back(2);
    case1_1.push_back(3);
    case1_1.push_back(0);
    case1_1.push_back(0);
    case1_1.push_back(0);

    vector<int> case1_2 = vector<int>();
    case1_2.push_back(2);
    case1_2.push_back(5);
    case1_2.push_back(6);

    merge_2(case1_1, case1_1.size() - case1_2.size(), case1_2, case1_2.size());

    for (int i = 0; i < case1_1.size(); i++)
    {
      cout << case1_1[i] << " ";
    }

    cout << endl;
  }

  void case2()
  {
    vector<int> case2_1 = vector<int>();
    case2_1.push_back(1);

    vector<int> case2_2 = vector<int>();

    merge_2(case2_1, case2_1.size() - case2_2.size(), case2_2, case2_2.size());

    for (int i = 0; i < case2_1.size(); i++)
    {
      cout << case2_1[i] << " ";
    }

    cout << endl;
  }

  void case3()
  {
    vector<int> case3_1 = vector<int>();
    case3_1.push_back(0);

    vector<int> case3_2 = vector<int>();
    case3_2.push_back(1);

    merge_2(case3_1, case3_1.size() - case3_2.size(), case3_2, case3_2.size());

    for (int i = 0; i < case3_1.size(); i++)
    {
      cout << case3_1[i] << " ";
    }

    cout << endl;
  }

  void case4()
  {
    vector<int> case4_1 = vector<int>();
    case4_1.push_back(1);
    case4_1.push_back(2);
    case4_1.push_back(4);
    case4_1.push_back(5);
    case4_1.push_back(6);
    case4_1.push_back(0);

    vector<int> case4_2 = vector<int>();
    case4_2.push_back(3);

    merge_2(case4_1, case4_1.size() - case4_2.size(), case4_2, case4_2.size());

    for (int i = 0; i < case4_1.size(); i++)
    {
      cout << case4_1[i] << " ";
    }

    cout << endl;
  }
};

int main()
{
  Solution *s = new Solution();

  s->case1(); // 1 2 2 3 5 6
  s->case2(); // 1
  s->case3(); // 1
  s->case4(); // 1 2 3 4 5 6
}