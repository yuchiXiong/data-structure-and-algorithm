# 线性结构

[数据结构： 线性表](https://xiongyuchi.top/2022/02/13/xian-xing-biao/)

## [LinkedNode](./LinkedNode.cpp)
基本单链表实现。

**构造函数**
- [x] `LinkedNode(T val, LinkedNode<T> *nextNode = NULL)`: 创建一个节点，设置节点的数据为val，下一个节点为nextNode。

**成员函数**
- [x] `void reverse()`: 反转单链表，~~没啥实现的理由……就是忽然想写一个。。~~

## [DoublyLinkedNode](./DoublyLinkedNode.cpp)
基本双向链表实现。

**构造函数**
- [x] `DoublyLinkedNode(T val, DoublyLinkedNode<T> *nextNode = NULL, DoublyLinkedNode<T> *prevNode = NULL)`: 创建一个节点，设置节点的数据为val，下一个节点为nextNode，上一个节点为prevNode。

## [LinkedList](./LinkedList.cpp)
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

## [SLinkedList](./SLinkedList.cpp)
基于单链表实现的链式线性容器，命名中的 S 指 `Singly`。API 与[LinkedList](./LinkedList.cpp)相同。

## [Vector](./Vector.cpp)

**构造函数**
- [x] `Vector()`: 创建一个空的数组。

**成员函数**
- [x] `void push(T value)`: 添加 `T` 类型元素到列表末尾。
- [x] `void insert(int index, T value)`: 在指定位置插入 `T` 类型元素。
- [x] `void set(int index, T value)`: 将指定位置的元素设置为 `T` 类型元素。
- [x] `T get(int index)`: 获取指定下标的元素
- [x] `void remove(int index)`: 删除指定下标的元素
- [x] `int size()`: 获取列表长度
- [x] `void clear()`: 清空列表
- [x] `bool isEmpty()`: 判断列表是否为空

**算法函数**

以 `algo` 为前缀的为常见的算法函数如排序等。
- [x] `void algo_shuffle()`: 打乱数组中的元素顺序
- [x] `void algo_bubbleSort()`: 冒泡排序
- [x] `void algo_selectSort()`: 选择排序
- [ ] `void algo_insertSort()`: 插入排序
- [ ] `void algo_shellSort()`: 希尔排序
- [x] `void algo_mergeSort()`: 归并排序
- [x] `void algo_quickSort()`: 快速排序
- ~~[ ] `void algo_heapSort()`: 堆排序~~

## [LinkedStack](./LinkedStack.cpp)
基于双向链表实现的链式栈数据结构。

**构造函数**
- [x] `LinkedStack()`: 创建一个链式栈。

**成员函数**
- [x] `int size()`: 返回链式栈中的元素个数。
- [x] `bool isEmpty()`: 判断链式栈是否为空。
- [x] `void push(T value)`: 将一个元素压入链式栈的栈顶。
- [x] `T pop()`: 弹出链式栈的栈顶元素。

## [ArrayStack](./ArrayStack.cpp)
基于变长数组实现的顺序栈数据结构，API 与 `LinkedStack` 一致。

## [LinkedQueue](./LinkedQueue.cpp)
基于双向链表实现的链式队列数据结构。

**构造函数**
- [x] `LinkedQueue()`: 创建一个链式队列。

**成员函数**
- [x] `int size()`: 返回链式队列中的元素个数。
- [x] `int isEmpty()`: 判断链式队列是否为空。
- [x] `void push(T value)`: 将一个元素放入链式队列的队尾。
- [x] `T pop()`: 弹出链式队列的队首元素。

## [ArrayQueue](./ArrayQueue.cpp)
基于变长数组实现的顺序队列数据结构，API 与 `LinkedQueue` 一致。

## [CircularQueue](./CircularQueue.cpp)
顺序存储的循环队列数据结构实现，API 与 `LinkedQueue` 一致。

## [PriorityQueue](./PriorityQueue.cpp)
基于二叉堆实现的优先队列数据结构。

**构造函数**
- [x] `PriorityQueue()`: 创建一个优先队列。

**成员函数**
- [x] `int size()`: 返回优先队列中的元素个数。
- [x] `bool isEmpty()`: 判断优先队列是否为空。
- [x] `void push(T value)`: 将一个元素加入优先队列并进行上浮操作。
- [x] `T max()`: 获取优先队列中最大的元素。
- [x] `T pop()`: 弹出优先队列中最大的元素并进行下沉操作。