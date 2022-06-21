class BinaryTree<T> {
  public val: T;
  public left: BinaryTree<T>;
  public right: BinaryTree<T>;
  private _bfs_queue: Array<BinaryTree<T>> = [];

  static generate<T>(nodes: Array<T | null>): BinaryTree<T> | null {
    if (!nodes[0]) return null;

    let parentIndex = 0, parentIndexOffeset = 0;
    let offset: 1 | 2 = 1;
    const queue: Array<BinaryTree<T>> = [];
    queue.push(new BinaryTree<T>(nodes[0]));

    for (let i = 1; i < nodes.length; i++) {
      const node = nodes[i];
      node !== null && (queue[i] = new BinaryTree<T>(node));

      parentIndex = Math.floor((i - offset) / 2) + parentIndexOffeset;
      if (nodes[parentIndex] !== null) {
        queue[parentIndex]?.left
          ? queue[parentIndex].right = queue[i]
          : queue[parentIndex].left = queue[i];
      } else {
        parentIndexOffeset++;
        i--;
        continue;
      }

      offset = offset === 1 ? 2 : 1;
    }
    return queue[0];
  }

  constructor(val: T, left?: BinaryTree<T>, right?: BinaryTree<T>) {
    this.val = val;
    left && (this.left = left);
    right && (this.right = right);
  }

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

const bt = BinaryTree.generate<string>(["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]);

console.log('先序遍历：', bt?.dfs('pre').join('')); // ABDHIEJCFG
console.log('中序遍历：', bt?.dfs('in').join('')); // HDIBJEAFCG
console.log('后序遍历：', bt?.dfs('post').join('')); // HIDJEBFGCA
console.log('层次遍历：', bt?.bfs().join('')); // ABCDEFGHIJ