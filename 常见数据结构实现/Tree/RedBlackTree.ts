import BinarySearchTree from "./BinarySearchTree";

export default class RedBlackTree<T> extends BinarySearchTree<T> {

  public static RED: 'RED' | 'BLACK' = "RED";
  public static BLACK: 'RED' | 'BLACK' = "BLACK";

  public left: RedBlackTree<T> | null
  public right: RedBlackTree<T> | null;
  public _color: 'RED' | 'BLACK';

  constructor(val: T, left?: RedBlackTree<T> | null, right?: RedBlackTree<T> | null) {
    super(val, left || null, right || null);
    this.left = left || null;
    this.right = right || null;
    this._color = RedBlackTree.BLACK;
    this._size = 1;
  }

  put(val: T): RedBlackTree<T> {
    const node = this._put(val);
    node._color = RedBlackTree.BLACK;
    return node;
  }

  _put(val: T): RedBlackTree<T> {
    if (this.val === val) return this;

    if (val < this.val) {
      if (this.left) {
        this.left = this.left._put(val);
      } else {
        this.left = new RedBlackTree<T>(val);
        this.left._color = RedBlackTree.RED;
      }
    } else if (val > this.val) {
      if (this.right) {
        this.right = this.right._put(val);
      } else {
        this.right = new RedBlackTree<T>(val);
        this.right._color = RedBlackTree.RED;
      }
    }

    let node = new RedBlackTree<T>(this.val, this.left, this.right);
    node._color = this._color;
    node._size = (node.left?._size || 0) + 1 + (node.right?._size || 0);

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
    const node = new RedBlackTree<T>(this.right!.val, null, this.right!.right || null);
    node._size = this._size;
    this._size = this._size - 1 - (this.right?.right?._size || 0);

    this.right = this.right?.left || null;
    node.left = this;

    node._color = this._color;
    this._color = RedBlackTree.RED;
    return node;
  }

  rightRotate(): RedBlackTree<T> {
    const node = new RedBlackTree<T>(this.left!.val, this.left?.left || null);
    node._size = this._size;
    this._size = this._size - 1 - (this.left?.left?._size || 0);

    this.left = this.left?.right || null;
    node.right = this;

    node._color = this._color;
    this._color = RedBlackTree.RED;

    return node;
  }

  blackNode(): RedBlackTree<T> {
    const node = new RedBlackTree<T>(this.val, this.left, this.right);

    node._size = this._size;
    node._color = RedBlackTree.RED;
    node.left!._color = RedBlackTree.BLACK;
    node.right!._color = RedBlackTree.BLACK;

    return node;
  }

  isRed(): boolean {
    return this._color === RedBlackTree.RED;
  }

}

const mockData = [...new Set(new Array(500000).fill('').map(() => Math.floor(Math.random() * 99999999)))];
let rbtree: RedBlackTree<number>;

console.time('gen')
mockData.forEach((item, index) => {
  if (index === 0) {
    rbtree = new RedBlackTree<number>(item);
  } else {
    rbtree = rbtree.put(item);
  }
});
console.timeEnd('gen')

// console.time('size')
// console.log("红黑树大小测试: ", rbtree!._size, rbtree!._size === mockData.length);
// console.timeEnd('size')

// console.time('sort')
// console.log('有序性测试: ', rbtree!.dfs('in').join('|') === mockData.sort((a, b) => a - b).join('|'));
// console.timeEnd('sort')
