export default class BinaryTreeNode<T> {
  public val: T;
  public left: BinaryTreeNode<T> | null = null;
  public right: BinaryTreeNode<T> | null = null;
  /** 用于层次优先遍历的队列 */
  private _bfs_queue: Array<BinaryTreeNode<T>> = [];

  constructor(val: T, left?: BinaryTreeNode<T> | null | undefined, right?: BinaryTreeNode<T> | null | undefined) {
    this.val = val;
    this.left = left || null;
    this.right = right || null;
  }

  /**
   * 深度优先遍历
   * @param {'pre' | 'in' | 'post'} order - 遍历方式，先序遍历/中序遍历/后序遍历
   * @returns {Array<T>}
   */
  dfs(order: "pre" | "in" | "post"): Array<T> {
    switch (order) {
      case "pre":
        return [this.val].concat(this?.left?.dfs(order) || []).concat(this?.right?.dfs(order) || []);
      case "in":
        return (this?.left?.dfs(order) || []).concat([this.val]).concat(this?.right?.dfs(order) || []);
      case "post":
        return (this?.left?.dfs(order) || []).concat(this?.right?.dfs(order) || []).concat([this.val]);
    }
  }

  /**
   * 层次优先遍历
   * @returns {Array<T>}
   */
  bfs(): Array<T> {
    this._bfs_queue.push(this);
    const result: Array<T> = [];

    while (this._bfs_queue.length) {
      const node = this._bfs_queue.shift();
      if (node) {
        result.push(node.val);
        node.left && this._bfs_queue.push(node.left);
        node.right && this._bfs_queue.push(node.right);
      }
    }

    return result;
  }

}

// const bt1 = new BinaryTree("A", new BinaryTree("B", new BinaryTree("D", new BinaryTree("H"), new BinaryTree("I")), new BinaryTree("E", new BinaryTree("J"))), new BinaryTree("C", new BinaryTree("F"), new BinaryTree("G")));

// console.log('先序遍历：', bt1?.dfs('pre').join('') === 'ABDHIEJCFG'); // ABDHIEJCFG
// console.log('中序遍历：', bt1?.dfs('in').join('') === 'HDIBJEAFCG'); // HDIBJEAFCG
// console.log('后序遍历：', bt1?.dfs('post').join('') === 'HIDJEBFGCA'); // HIDJEBFGCA
// console.log('层次遍历：', bt1?.bfs().join('') === 'ABCDEFGHIJ'); // ABCDEFGHIJ

// const bt2 = new BinaryTree("1", null, new BinaryTree("2", null, new BinaryTree("3")));
// console.log('先序遍历：', bt2?.dfs('pre').join('') === '123'); // 123
// console.log('中序遍历：', bt2?.dfs('in').join('') === '123'); // 123
// console.log('后序遍历：', bt2?.dfs('post').join('') === '321'); // 321
// console.log('层次遍历：', bt2?.bfs().join('') === '123'); // 123