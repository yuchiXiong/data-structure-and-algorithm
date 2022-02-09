template <typename T>
class DoublyLinkedNode
{
private:
  T val;
  DoublyLinkedNode<T> *next;
  DoublyLinkedNode<T> *prev;

public:
  DoublyLinkedNode(T val, DoublyLinkedNode<T> *nextNode = NULL, DoublyLinkedNode<T> *prevNode = NULL)
  {
    this->val = val;
    this->next = nextNode;
    this->prev = prevNode;
  }
};