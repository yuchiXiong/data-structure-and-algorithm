import BinaryTree from "./BinaryTree";

export default class BinarySearchTree<T> extends BinaryTree<T> {

  public val: T;
  public left: BinarySearchTree<T> | null;
  public right: BinarySearchTree<T> | null;
  public _size: number;

  constructor(val: T, left?: BinarySearchTree<T> | null, right?: BinarySearchTree<T> | null) {
    super(val, null, null);
    this.val = val;
    this.left = left || null;
    this.right = right || null;
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
    if (val === this.val) return true;

    if (val < this.val) {
      return this.left ? this.left.contain(val) : false
    } else {
      return this.right ? this.right.contain(val) : false
    }
  }

  getMax(): BinarySearchTree<T> {
    if (!this.right) return this;
    return this.right.getMax();
  }

  getMin(): BinarySearchTree<T> {
    if (!this.left) return this;
    return this.left.getMin();
  }

  remove(val: T): BinarySearchTree<T> | null {
    if (!this.contain(val)) return this;

    if (val < this.val) {
      this.left && (this.left = this.left?.remove(val));
    } else if (val > this.val) {
      this.right && (this.right = this.right?.remove(val));
    } else {
      if (!this.left && !this.remove) return null;
      if (!this.left) return this.right;
      if (!this.right) return this.left;

      // 选择一个新的节点当作当前节点
      const min = this.right.getMin();
      const next = new BinarySearchTree<T>(min.val);

      next.right = this.right.remove(min.val);
      next.left = this.left;
      next._size = this.size();

      return next;
    }

    return this;
  }
}

// const mockData: number[] = [...new Set(new Array(9999).fill(0).map(_ => Math.floor(Math.random() * 9999)))]
// let bst: BinarySearchTree<number> | null = null;
// mockData.forEach((cur, i) => {
//   if (i === 0) {
//     bst = new BinarySearchTree<number>(cur);
//   } else {
//     bst!.put(cur);
//   }
// });

// const sorted = mockData.sort((a, b) => a - b);
// console.log("验证有序性: ", bst!.dfs('in').join('-') === sorted.join('-'));
// console.log("当前BST大小: ", bst!._size);
// console.log("验证顺次:", sorted.every((item, index) => bst!.get(index) === item));
// console.log("验证最大值", bst!.getMax().val === sorted[sorted.length - 1]);
// console.log("验证最小值", bst!.getMin().val === sorted[0]);

// while (bst !== null) {
//   const randomIndex = Math.floor(Math.random() * mockData.length);
//   bst = (bst as BinarySearchTree<number>).remove(mockData[randomIndex]);
//   mockData.splice(randomIndex, 1);

//   if ((bst?.dfs('in') || []).join('|') !== mockData.sort((a, b) => a - b).join('|')) {
//     console.log('删除验证失败！')
//     break;
//   }
// }