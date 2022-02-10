# data-structure
我又双叒叕准备学数据结构啦

- 顺序表
- 链表
- 变长数组
- 顺序队列
  - 循环队列
- 链式队列
- 顺序栈
- 链式栈
  - 双向链栈
- 双端队列

## [LinkedNode](./LinearList/LinkedNode.cpp)
基本单链表实现。

**构造函数**
- [x] `LinkedNode(T val, LinkedNode<T> *nextNode = NULL)`: 创建一个节点，设置节点的数据为val，下一个节点为nextNode。

**成员函数**
- [x] `void reverse()`: 反转单链表，~~没啥实现的理由……就是忽然想写一个。。~~

## [DoublyLinkedNode](./LinearList/DoublyLinkedNode.cpp)
基本双向链表实现。

**构造函数**
- [x] `DoublyLinkedNode(T val, DoublyLinkedNode<T> *nextNode = NULL, DoublyLinkedNode<T> *prevNode = NULL)`: 创建一个节点，设置节点的数据为val，下一个节点为nextNode，上一个节点为prevNode。

## [LinkedList](./LinearList/LinkedList.cpp)
基于双向链表实现的链式线性容器。

**构造函数**
- [x] `LinkedList()`: 创建一个空的链式线性容器。

**成员函数**
- [x] `int size()`: 返回链式线性容器中的元素个数。
- [x] `bool isEmpty()`: 判断链式线性容器是否为空。
- [x] `void addFirst(T value)`: 在链式线性容器的头部添加一个元素。
- [x] `void addLast(T value)`: 在链式线性容器的尾部添加一个元素。
- [x] `void add(int index, T value)`: 在链式线性容器中的第index个位置插入一个元素value。
- [x] `T get(int index)`: 获取链式线性容器中指定位置的元素。
- [x] `void remove(int index)`: 从链式线性容器中删除指定位置的元素。
- [x] `void set(int index, T val)`: 将链式线性容器中指定位置的元素设置为val。
- [x] `void clear()`: 清空链式线性容器。

## [SLinkedList](./LinearList/SLinkedList.cpp)
基于单链表实现的链式线性容器，命名中的 S 指 `Singly`。API 与[LinkedList](./LinearList/LinkedList.cpp)相同。






## [Vector](https://github.com/yuchiXiong/data-structure/blob/main/List/Vector.cpp)

**基本函数**
- [x] `void push(T el)`: 添加 `T` 类型元素到列表
- [x] `T get(int index)`: 获取指定下标的元素
- [x] `void remove(int index)`: 删除指定下标的元素
- [x] `int size()`: 获取列表长度
- [x] `void clear()`: 清空列表
- [x] `bool isEmpty()`: 判断列表是否为空

**算法函数**

以 `algo` 为前缀的为常见的算法函数如排序等。

- [x] `void algo_bubbleSort()`: 冒泡排序
- [x] `void algo_selectSort()`: 选择排序
- [ ] `void algo_insertSort()`: 插入排序
- [ ] `void algo_shellSort()`: 希尔排序
- [x] `void algo_mergeSort()`: 归并排序
- [x] `void algo_quickSort()`: 快速排序
- ~~[ ] `void algo_heapSort()`: 堆排序~~

## [LinkedList](https://github.com/yuchiXiong/data-structure/blob/main/List/LinkedList.cpp)

## [ListNode](https://github.com/yuchiXiong/data-structure/blob/main/List/ListNode.cpp)

## [Queue](https://github.com/yuchiXiong/data-structure/blob/main/List/Queue.cpp)

## [Stack](https://github.com/yuchiXiong/data-structure/blob/main/List/Stack.cpp)
