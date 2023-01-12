import BinarySearchTree, { Valuable } from "./BinarySearchTree";

export default class RedBlackTree<K extends Valuable, V> extends BinarySearchTree<K, V> {

  static RED: 'RED' | 'BLACK' = "RED";
  static BLACK: 'RED' | 'BLACK' = "BLACK";

  left: RedBlackTree<K, V> | null = null;
  right: RedBlackTree<K, V> | null = null;
  _color: 'RED' | 'BLACK';

  constructor(key: K, value: V, compareTo?: (key: K) => 0 | 1 | -1) {
    super(key, value, compareTo);
    this._color = RedBlackTree.BLACK;
    this._size = 1;
  }

  put(key: K, value: V): RedBlackTree<K, V> {
    const compareResult = this.compareTo(key);
    if (compareResult === 0) return this;

    if (compareResult < 0) {
      if (this.left) {
        this.left = this.left.put(key, value);
      } else {
        this.left = new RedBlackTree<K, V>(key, value, this.compareTo);
        this.left._color = RedBlackTree.RED;
      }
    } else {
      if (this.right) {
        this.right = this.right.put(key, value);
      } else {
        this.right = new RedBlackTree<K, V>(key, value, this.compareTo);
        this.right._color = RedBlackTree.RED;
      }
    }

    this._size = (this.left?._size || 0) + 1 + (this.right?._size || 0);

    let node = this as RedBlackTree<K, V>;
    if (!node.left?.isRed() && node.right?.isRed()) {
      node = node.leftRotate();
    }

    if (node.left?.isRed() && node.left.left?.isRed()) {
      node = node.rightRotate();
    }

    if (node.left?.isRed() && node.right?.isRed()) {
      node = node.blackNode();
    }

    return node;
  }

  leftRotate(): RedBlackTree<K, V> {
    const node = this.right as RedBlackTree<K, V>;
    this.right = node?.left || null;
    node.left = this;

    node._size = this._size;
    this._size = this._size - 1 - (node.right?._size || 0);
    node._color = this._color;
    this._color = RedBlackTree.RED;

    return node;
  }

  rightRotate(): RedBlackTree<K, V> {
    const node = this.left as RedBlackTree<K, V>;
    this.left = node?.right || null;
    node.right = this;

    node._size = this._size;
    this._size = this._size - 1 - (node.left?._size || 0);
    node._color = this._color;
    this._color = RedBlackTree.RED;

    return node;
  }

  blackNode(): RedBlackTree<K, V> {
    this._color = RedBlackTree.RED;
    this.left!._color = RedBlackTree.BLACK;
    this.right!._color = RedBlackTree.BLACK;

    return this;
  }

  isRed(): boolean {
    return this._color === RedBlackTree.RED;
  }

};

const SIZE = 100000;
const mockData = [...new Set(new Array(SIZE).fill('').map(() => Math.floor(Math.random() * 999999999)))];

let rbtree: RedBlackTree<number, number>;

console.log('测试数据规模: ', SIZE, ' 实际产生的不重复数据量: ', mockData.length);

console.time('插入红黑树耗时: ');
mockData.forEach((item, index) => {
  if (index === 0) {
    rbtree = new RedBlackTree<number, number>(item, item);
  } else {
    rbtree = rbtree.put(item, item);
  }
});
console.timeEnd('插入红黑树耗时: ');

console.log("验证红黑树大小: ", rbtree!._size, rbtree!._size === mockData.length);

console.log('验证红黑树中序遍历有序: ', rbtree!.dfs('in').map(i => i.key).join('|') === mockData.sort((a, b) => a - b).join('|'));

console.time('亿次随机访问耗时: ');
for (let i = 0; i < 100000000; i++) {
  rbtree!.get(mockData[Math.floor(Math.random() * mockData.length)]);
}
console.timeEnd('亿次随机访问耗时: ');