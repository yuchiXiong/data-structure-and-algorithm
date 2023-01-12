import BinaryTree from "./BinaryTree";

export interface BinarySearchTreeNodeValue<K, V> {
  key: K,
  value: V
}

interface Comparable<T> {
  compareTo: (o: T) => 0 | -1 | 1
}

interface Valuable {
  valueOf: Function
}

export default class BinarySearchTree<K extends Valuable, V>
  extends BinaryTree<BinarySearchTreeNodeValue<K, V>>
  implements Comparable<K> {

  public val: BinarySearchTreeNodeValue<K, V>;
  public left: BinarySearchTree<K, V> | null = null;
  public right: BinarySearchTree<K, V> | null = null;
  public _size: number = 0;

  constructor(key: K, value: V, compareTo?: (key: K) => 0 | 1 | -1) {
    super({ key, value }, null, null);
    this.val = { key, value };
    this._size = 1;
    compareTo && (this.compareTo = compareTo);
  }

  compareTo(key: K): 0 | 1 | -1 {

    if (!key.valueOf) {
      throw 'key not is valuable'
    }

    if (key.valueOf() === this.val.key!.valueOf()) return 0;
    return key.valueOf() > this.val.key!.valueOf() ? 1 : -1
  }


  put(key: K, value: V): void {
    const compareResult = this.compareTo(key);
    if (compareResult === 0) {
      this.val.value = value;
      return;
    }

    if (compareResult < 0) {
      this.left
        ? this.left.put(key, value)
        : this.left = new BinarySearchTree<K, V>(key, value, this.compareTo);
    } else {
      this.right
        ? this.right.put(key, value)
        : this.right = new BinarySearchTree<K, V>(key, value, this.compareTo);
    }
    this._size = (this.left?._size || 0) + 1 + (this.right?._size || 0);
  }

  size(): number {
    return (this.left?.size() || 0) + (this.right?.size() || 0) + 1;
  }

  get(key: K): V | null {
    const compareResult = this.compareTo(key)
    if (compareResult === 0) return this.val.value

    if (this.left === null && this.right === null) return null;

    if (compareResult < 0) {
      return this.left ? this.left.get(key) : null;
    } else {
      return this.right ? this.right.get(key) : null;
    }
  }

  contain(key: K): boolean {
    if (key === this.val.key) return true;

    if (key < this.val.key) {
      return this.left ? this.left.contain(key) : false;
    } else {
      return this.right ? this.right.contain(key) : false;
    }
  }

  getMax(): BinarySearchTree<K, V> {
    if (!this.right) return this;
    return this.right.getMax();
  }

  getMin(): BinarySearchTree<K, V> {
    if (!this.left) return this;
    return this.left.getMin();
  }

  remove(key: K): BinarySearchTree<K, V> | null {
    if (!this.contain(key)) return this;

    const compareResult = this.compareTo(key);
    if (compareResult < 0) {
      this.left && (this.left = this.left?.remove(key));
    } else if (compareResult > 0) {
      this.right && (this.right = this.right?.remove(key));
    } else {
      if (!this.left && !this.remove) return null;
      if (!this.left) return this.right;
      if (!this.right) return this.left;

      // 选择一个新的节点当作当前节点
      const min = this.right.getMin();
      const next = new BinarySearchTree<K, V>(min.val.key, min.val.value);

      next.right = this.right.remove(min.val.key);
      next.left = this.left;
      next._size = this.size();

      return next;
    }

    return this;
  }
}

const mockData: number[] = [...new Set(new Array(10000).fill(0).map(_ => Math.floor(Math.random() * 20)))]

console.time('gen');
let bst: BinarySearchTree<number, number> | null = null;
mockData.forEach((cur, i) => {
  if (i === 0) {
    bst = new BinarySearchTree<number, number>(cur, cur);
  } else {
    bst!.put(cur, cur);
  }
});
console.timeEnd('gen');

const sorted = mockData.sort((a, b) => a - b);
console.log("验证有序性: ", bst!.dfs('in').map(i => i.value).join('-') === sorted.join('-'));
console.log("验证BST大小: ", bst!._size === sorted.length);
console.log("验证最大值", bst!.getMax().val.value === sorted[sorted.length - 1]);
console.log("验证最小值", bst!.getMin().val.value === sorted[0]);



console.time('remove')
while (bst !== null) {

  bst = (bst as BinarySearchTree<number, number>).remove(mockData[0]);
  // mockData.splice(randomIndex, 1);
  mockData.shift();

  if ((bst?.dfs('in') || []).map(i => i.value).join('|') !== mockData.sort((a, b) => a - b).join('|')) {
    console.log('删除验证失败！')
    break;
  }
}
console.timeEnd('remove')
