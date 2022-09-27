import BinaryTree from "./BinaryTree";

export default class BinarySearchTree<T> extends BinaryTree<T> {

  public val: T;
  public left: BinarySearchTree<T> | null;
  public right: BinarySearchTree<T> | null;
  public _size: number;

  constructor(val: T) {
    super(val, null, null);
    this.val = val;
    this.left = null;
    this.right = null;
    this._size = 1;
  }

  put(val: T): void {
    if (this.contain(val)) return;

    if (val < this.val) {
      this.left
        ? this.left.put(val)
        : this.left = new BinarySearchTree<T>(val);
    } else {
      this.right
        ? this.right.put(val)
        : this.right = new BinarySearchTree<T>(val);
    }
    this._size = this.size();
  }

  size(): number {
    return (this.left?.size() || 0) + (this.right?.size() || 0) + 1;
  }

  get(index: number): T | null {
    if (index < 0 || index > this._size) return null;

    const left = this.left?._size || 0;

    if (index === left) {
      return this.val;
    } else if (index < left) {
      return this.left ? this.left.get(index) : null;
    } else {
      return this.right ? this.right.get(index - left - 1) : null;
    }
  }

  contain(val: T): boolean {
    if (val < this.val) {
      return this.left ? this.left.contain(val) : false
    } else {
      return this.right ? this.right.contain(val) : false
    }
  }

  getMax(): T {
    if (!this.right) return this.val;
    return this.right.getMax();
  }

  getMin(): T {
    if (!this.left) return this.val;
    return this.left.getMin();
  }

}

const mockData: number[] = new Array(9999).fill(0).map(_ => Math.floor(Math.random() * 9999))
const bst = new BinarySearchTree<number>(6);

mockData.forEach(i => bst.put(i));

mockData.unshift(6);

bst.dfs('in');

const sorted = mockData.sort((a, b) => a - b);
console.log("验证有序性: ", bst.dfs('in').join('-') === sorted.join('-'));
console.log("当前BST大小: ", bst._size);
console.log("验证顺次:", sorted.every((item, index) => bst.get(index) === item));
console.log("验证最大值", bst.getMax() === sorted[sorted.length - 1]);
console.log("验证最小值", bst.getMin() === sorted[0]);

