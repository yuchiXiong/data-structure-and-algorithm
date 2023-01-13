# 符号表相关

~~是的，我换成 TypeScript 实现了~~

## [BinaryTreeNode](./BinaryTreeNode.ts)

基本二叉树节点实现。

**构造函数**

- [x] `BinaryTreeNode<T>(val: T, left?: BinaryTreeNode<T> | null, right?: BinaryTreeNode<T> | null)`: 创建一个二叉树节点，设置节点的数据为 val，左右节点分别为 left 和 right 。

**成员方法**

- [x] `dfs(order: 'pre' | 'in' | 'post'): Array<T>`: 深度优先遍历以当前节点为根结点的二叉树，支持先序/中序/后续遍历

- [x] `bfs(): Array<T>`: 层次优先遍历以当前节点为根结点的二叉树

## [BinarySearchTree](./BinarySearchTree.ts)

继承自基础二叉树实现的二叉搜索树（BST），节点以键值形式存储。

**构造函数**

- [x] `BinarySearchTree<K extends Valuable, V>(key: K, value: V, compareTo?: (key: K) => 0 | 1 | -1)`: 创建一个 BST 节点，设置节点的数据为 key 与 value 的键值对，其中 key 的类型 K 需要支持 valueOf 方法以实现对 key 的排序。

**成员方法**

- [x] `put(key: K, value: V): void`: 将 key 与 value 组成的键值对添加到 BST 中
- [x] `size(): number`: 返回 BST 中的节点数量
- [x] `get(key: K): V | null`: 返回 BST 中指定 key 的值，当指定 key 不存时，返回 null
- [x] `contain(key: K): boolean`: 返回用于表示指定 key 是否存在于 BST 中的布尔值
- [x] `getMax(): BinarySearchTree<K, V>`: 返回当前节点为根结点的 BST 中的最大 key 节点
- [x] `getMin(): BinarySearchTree<K, V>`: 返回当前节点为根结点的 BST 中的最小 key 节点
- [x] `remove(key: K): BinarySearchTree<K, V> | null`: 返回从当前节点为根结点的 BST 中移除了指定 key 节点后的新的 BST 根结点，**由于该操作可能删除根结点，导致返回的新 BST 与原 BST 根结点不相同，这需要重新赋值以完成 BST 局部的修改**
- [x] `compareTo(key: K): 0 | 1 | -1`: 用于比对当前节点与给定 key 之间大小关系的接口方法，它来自于 Comparable 接口。默认情况下，该方法依赖于 valueOf 方法的结果，可通过构造函数传参的方式重写内部逻辑实现自定以的排序规则

## [RedBlackTree](./RedBlackTree.ts)

继承自二叉搜索树 BST 的红黑树（RBTree）基本实现。

**构造函数**

- [x] `RedBlackTree<K extends Valuable, V> (key: K, value: V, compareTo?: (key: K) => 0 | 1 | -1)`: 创建一个 RBTree 节点，设置节点的数据为 key 与 value 的键值对，其中 key 的类型 K 需要支持 valueOf 方法以实现对 key 的排序。

**成员方法**

- [x] `put(key: K, value: V): RedBlackTree<K, V>`: 将 key 与 value 组成的键值对添加到 RBTree 中，**由于该操作可能触发 RBTree 左旋/右旋，导致返回的新 RBTree 与原 RBTree 根结点不相同，这需要重新赋值以完成 RBTree 局部的修改**

**注：RBTree 实现继承自 BST，除上述成员方法外，可以正常调用任何来自 BST 和二叉树的成员方法**

**注：RBTree 内部实现使用的左旋/右旋等操作方法不作为 API 陈列**

## [TreeSet](./TreeSet.ts)

基于（**而非继承**）红黑树的 TreeSet 基本实现。

**构造函数**

- [x] `TreeSet<T extends Valuable>()`: 创建一个 TreeSet 实例

**成员方法**

- [x] `add(value: T)`: 将一个元素添加到 TreeSet 中
- [x] `delete(value: T): T | null`: 从 TreeSet 中移除指定元素
- [x] `has(value: T): boolean`: 返回用于表示 TreeSet 中是否包含指定值的布尔值
- [x] `size(): number`: 返回 TreeSet 中的元素个数
- [x] `[Symbol.iterator]()`: 返回一个包含 TreeSet 所有元素的迭代器

## [TreeMap](./TreeMap.ts)

基于（**而非继承**）红黑树的 TreeMap 基本实现。

**构造函数**

- [x] `TreeMap<K, V>()`: 创建一个 TreeMap 实例

**成员方法**

- [x] `set(key: K, value: V): void`: 将一组键值对添加到 TreeMap 中
- [x] `delete(key: K): V | null`: 从 TreeMap 中移除指定键值对
- [x] `get(key: K): V | null`: 尝试从 TreeMap 中获取指定元素，如不存在，返回 null
- [x] `has(key: K): boolean`: 返回用于表示 TreeMap 中是否包含指定键值的布尔值
- [x] `keys(): K[]`: 返回当前 TreeMap 实例中所有的键
- [x] `values(): V[]`: 返回当前 TreeMap 实例中所有的值
- [x] `size(): number`: 返回 TreeMap 中的元素个数
