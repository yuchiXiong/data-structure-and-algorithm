/**
 * @file LinkedNode.cpp
 * @author yuchiXiong (yuchi.xiong@foxmail.com)
 * @brief 一个简单的双向链表实现
 * @version 0.1
 * @date 2022-02-10
 * 
 * @copyright Copyright (c) 2022
 * 
 */
template <typename T>
class DoublyLinkedNode
{
public:
  T val;
  DoublyLinkedNode<T> *next;
  DoublyLinkedNode<T> *prev;
  DoublyLinkedNode(T val, DoublyLinkedNode<T> *nextNode = NULL, DoublyLinkedNode<T> *prevNode = NULL)
  {
    this->val = val;
    this->next = nextNode;
    this->prev = prevNode;
  }
};