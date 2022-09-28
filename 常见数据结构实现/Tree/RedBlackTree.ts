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
        this.left._color = "RED";
      }
    } else if (val > this.val) {
      if (this.right) {
        this.right = this.right._put(val);
      } else {
        this.right = new RedBlackTree<T>(val);
        this.right._color = "RED";
      }
    }

    let node = new RedBlackTree<T>(this.val, this.left, this.right);
    node._color = this._color;

    if (node.left?._color !== "RED" && node.right?._color === "RED") {
      node = node.leftRotate();
    }

    if (node.left?._color === "RED" && node.left.left?._color === "RED") {
      node = node.rightRotate();
    }

    if (node.left?._color === "RED" && node.right?._color === "RED") {
      node = node.blackNode();
    }

    return node;
  }

  leftRotate(): RedBlackTree<T> {
    const node = new RedBlackTree<T>(this.right!.val, this.right!.right || null);
    this.right = this.right?.left || null;
    node.left = this;
    node._color = this._color;
    this._color = RedBlackTree.RED;
    return node;
  }

  rightRotate(): RedBlackTree<T> {
    const node = new RedBlackTree<T>(this.left!.val, this.left?.left || null);
    this.left = this.left?.right || null;
    node.right = this;
    node._color = this._color;
    this._color = RedBlackTree.RED;
    return node;
  }

  blackNode(): RedBlackTree<T> {
    const node = new RedBlackTree<T>(this.val, this.left, this.right);

    node._color = RedBlackTree.RED;
    node.left!._color = RedBlackTree.BLACK;
    node.right!._color = RedBlackTree.BLACK;

    return node;
  }

}

let rbtree = new RedBlackTree<string>('S');
rbtree = rbtree.put('E');
rbtree = rbtree.put('A');
rbtree = rbtree.put('R');
rbtree = rbtree.put('C');
rbtree = rbtree.put('H');
console.log(rbtree.dfs('in'));

// console.log(rbtree);
