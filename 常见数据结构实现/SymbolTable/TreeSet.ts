import RedBlackTree, { Valuable } from './BinarySearchTree';

export default class TreeSet<T extends Valuable>  {

  private _size: number;
  private _tree: RedBlackTree<T, T> | null
  constructor() {
    this._tree = null;
    this._size = 0;
  }

  *[Symbol.iterator]() {
    const result: Array<any> = this._tree?.dfs('in') || [];

    for (let i = 0; i < result.length; i++) {
      yield result[i].key;
    }
  };

  add(value: T) {
    if (!this._tree) {
      this._tree = new RedBlackTree<T, T>(value, value)
    } else {
      this._tree.put(value, value);
    }
    this._size++;
  }

  delete(value: T): T | null {
    if (!this._tree) {
      return null;
    } else {
      const result = this._tree.get(value);
      this._tree.remove(value);
      this._size--;
      return result;
    }
  }

  has(value: T): boolean {
    return this._tree?.contain(value) || false;
  }

  size(): number {
    return this._size;
  }
}


const set = new TreeSet<number>();

set.add(20);
set.add(30);
set.add(40);
set.delete(40);
set.has(30);
set.has(30);
set.has(30);
set.has(30);

console.log(set.size())

console.log([...set])