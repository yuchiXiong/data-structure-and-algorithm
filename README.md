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
基本单向链表实现。

**构造函数**
- [x] `LinkedNode(T value, LinkedNode<T> *next)`: 创建一个节点，并设置节点的数据为value，下一个节点为next。

**成员函数**
- [x] `void reverse()`: 反转单向链表，~~没啥实现的理由……就是忽然想写一个。。~~

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
