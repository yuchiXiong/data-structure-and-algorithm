#include <iostream>
using namespace std;
/**
 * ! 对于这个数据结构的疑问
 * 1. 给定的数据一定是有序的吗？find函数越界问题
 * 2. 使用场景
 */
class UnionFind
{
private:
  int _size = 0;
  int *parent;
  int *treeSize;

public:
  UnionFind(int len)
  {
    _size = len;
    parent = new int[_size];
    treeSize = new int[_size];
    for (int i = 0; i < _size; i++)
    {
      treeSize[i] = 1;
      parent[i] = i;
    }
  }
  void unionNode(int a, int b)
  {
    if (getRootNode(a) == getRootNode(b))
      return;

    if (treeSize[b] > treeSize[a])
    {
      parent[b] = a;
      treeSize[a] += treeSize[b];
    }
    else
    {
      parent[a] = b;
      treeSize[b] += treeSize[a];
    }
  }
  bool connected(int a, int b)
  {
    return getRootNode(a) == getRootNode(b);
  }
  int getRootNode(int target)
  {
    while (parent[target] != target)
    {
      parent[target] = parent[parent[target]];
      target = parent[target];
    }
    return target;
  }
};

int main()
{

  UnionFind *uf = new UnionFind(10000);

  uf->unionNode(1, 2);
  uf->unionNode(2, 3);
  uf->unionNode(3, 8);
  uf->unionNode(4, 3400);

  cout << uf->connected(1, 3) << endl;
  cout << uf->connected(1, 8) << endl;
  cout << uf->connected(1, 5) << endl;
  cout << uf->connected(1, 3400) << endl;

  uf->unionNode(4, 8);

  cout << uf->connected(1, 3400) << endl;

  return 0;
}