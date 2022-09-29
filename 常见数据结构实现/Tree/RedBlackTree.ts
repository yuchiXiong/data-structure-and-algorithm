import BinarySearchTree from "./BinarySearchTree";

export default class RedBlackTree<T> extends BinarySearchTree<T> {

  static RED: 'RED' | 'BLACK' = "RED";
  static BLACK: 'RED' | 'BLACK' = "BLACK";

  left: RedBlackTree<T> | null;
  right: RedBlackTree<T> | null;
  _color: 'RED' | 'BLACK';

  constructor(val: T, left?: RedBlackTree<T> | null, right?: RedBlackTree<T> | null) {
    super(val, left || null, right || null);
    this.left = left || null;
    this.right = right || null;
    this._color = RedBlackTree.BLACK;
    this._size = 1;
  }

  put(val: T): RedBlackTree<T> {
    if (this.val === val) return this;

    if (val < this.val) {
      if (this.left) {
        this.left = this.left.put(val);
      } else {
        this.left = new RedBlackTree<T>(val);
        this.left._color = RedBlackTree.RED;
      }
    } else {
      if (this.right) {
        this.right = this.right.put(val);
      } else {
        this.right = new RedBlackTree<T>(val);
        this.right._color = RedBlackTree.RED;
      }
    }

    this._size = (this.left?._size || 0) + 1 + (this.right?._size || 0);

    let node = this as RedBlackTree<T>;
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

  leftRotate(): RedBlackTree<T> {
    const node = this.right as RedBlackTree<T>;
    this.right = node?.left || null;
    node.left = this;

    node._size = this._size;
    this._size = this._size - 1 - (node.right?._size || 0);
    node._color = this._color;
    this._color = RedBlackTree.RED;

    return node;
  }

  rightRotate(): RedBlackTree<T> {
    const node = this.left as RedBlackTree<T>;
    this.left = node?.right || null;
    node.right = this;

    node._size = this._size;
    this._size = this._size - 1 - (node.left?._size || 0);
    node._color = this._color;
    this._color = RedBlackTree.RED;

    return node;
  }

  blackNode(): RedBlackTree<T> {
    this._color = RedBlackTree.RED;
    this.left!._color = RedBlackTree.BLACK;
    this.right!._color = RedBlackTree.BLACK;

    return this;
  }

  isRed(): boolean {
    return this._color === RedBlackTree.RED;
  }

};

const SIZE = 10000000;
const mockData = [...new Set(new Array(SIZE).fill('').map(() => Math.floor(Math.random() * 999999999)))];

let rbtree: RedBlackTree<number>;

console.log('测试数据规模: ', SIZE, ' 实际产生的不重复数据量: ', mockData.length);

console.time('插入红黑树耗时: ');
mockData.forEach((item, index) => {
  if (index === 0) {
    rbtree = new RedBlackTree<number>(item);
  } else {
    rbtree = rbtree.put(item);
  }
});
console.timeEnd('插入红黑树耗时: ');

console.log("验证红黑树大小: ", rbtree!._size, rbtree!._size === mockData.length);

console.log('验证红黑树中序遍历有序: ', rbtree!.dfs('in').join('|') === mockData.sort((a, b) => a - b).join('|'));

console.time('亿次随机访问耗时: ');
for (let i = 0; i < 100000000; i++) {
  rbtree!.get(mockData[Math.floor(Math.random() * mockData.length)]);
}
console.timeEnd('亿次随机访问耗时: ');