/**
 * @file LinkedNode.cpp
 * @author yuchiXiong (yuchi.xiong@foxmail.com)
 * @brief 一个简单的单链表实现
 * @version 0.1
 * @date 2022-02-09
 * 
 * @copyright Copyright (c) 2022
 * 
 */
template <typename T>
class LinkedNode
{
public:
  T val;
  LinkedNode<T> *next;
  LinkedNode(T val, LinkedNode<T> *nextNode = NULL)
  {
    this->val = val;
    this->next = nextNode;
  }

  void reverse()
  {
    LinkedNode<T> *p = this;
    LinkedNode<T> *head = new LinkedNode<T>(val, NULL);

    while (p)
    {
      LinkedNode<T> *current = new LinkedNode<T>(p->val, head);
      val = p->val;
      head = current;

      p = p->next;
    }
    next = head->next;
  }
};

// int main()
// {

//   LinkedNode<int> *node3 = new LinkedNode<int>(30, NULL);
//   LinkedNode<int> *node2 = new LinkedNode<int>(20, node3);
//   LinkedNode<int> *node1 = new LinkedNode<int>(10, node2);

//   cout << "0:" << node1->val << endl;
//   cout << "1:" << node1->next->val << endl;
//   cout << "2:" << node1->next->next->val << endl;

//   node1->reverse();
//   cout << "反转后" << endl;

//   cout << "0:" << node1->val << endl;
//   cout << "1:" << node1->next->val << endl;
//   cout << "2:" << node1->next->next->val << endl;
// }