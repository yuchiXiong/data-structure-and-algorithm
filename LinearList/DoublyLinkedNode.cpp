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