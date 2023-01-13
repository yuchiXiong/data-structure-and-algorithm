import RedBlackTree, { Valuable } from './BinarySearchTree';

export default class TreeMap<K extends Valuable, V>  {

  private _size: number;
  private _tree: RedBlackTree<K, V> | null
  constructor() {
    this._tree = null;
    this._size = 0;
  }

  set(key: K, value: V) {
    if (!this._tree) {
      this._tree = new RedBlackTree<K, V>(key, value)
    } else {
      this._tree.put(key, value);
    }
    this._size++;
  }

  delete(key: K): V | null {
    if (!this._tree) {
      return null;
    } else {
      const result = this._tree.get(key);
      this._tree.remove(key);
      this._size--;
      return result;
    }
  }

  get(key: K): V | null {
    return this._tree?.get(key) || null
  }

  has(key: K): boolean {
    return this._tree?.contain(key) || false;
  }

  keys(): K[] {
    return this._tree?.dfs('in').map(i => i.key) || [];
  }

  values(): V[] {
    return this._tree?.dfs('in').map(i => i.value) || [];
  }

  size(): number {
    return this._size;
  }
}


const map = new TreeMap<number, string>();

map.set(2000, 'kuuga')
map.set(2001, 'agito')

console.log(map.get(2001))

map.set(2003, 'faiz')
map.set(2009, 'decade')

console.log(map.has(2005))
map.delete(2003);
console.log(map.has(2003))

console.log(map.keys())
console.log(map.values())