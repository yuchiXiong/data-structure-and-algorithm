class UnionFind {
  constructor() {
    this.parent = {};
    this.treeSize = {};
    this.maxSize = 0;
  }

  unionNode(a, b) {
    let parentB = this.getRootNode(b);
    let parentA = this.getRootNode(a);

    if (parentA === undefined) {
      this.parent[a] = a;
      this.treeSize[a] = 1;
    }
    if (parentB === undefined) {
      this.parent[b] = b;
      this.treeSize[b] = 1;
    }

    this.maxSize = Math.max(this.treeSize[a], this.treeSize[b], this.maxSize);
    parentB = this.getRootNode(b);
    parentA = this.getRootNode(a);
    if (parentA === parentB)
      return;

    if (this.treeSize[b] > this.treeSize[a]) {
      this.parent[parentB] = parentA;
      this.treeSize[parentA] += this.treeSize[parentB];
    }
    else {
      this.parent[parentA] = parentB;
      this.treeSize[parentB] += this.treeSize[parentA];
    }

    this.maxSize = Math.max(this.treeSize[parentA], this.treeSize[parentB], this.maxSize);
  }

  connected(a, b) {
    if (this.getRootNode(a) === undefined) return false;
    if (this.getRootNode(b) === undefined) return false;

    return this.getRootNode(a) === this.getRootNode(b);
  }

  getRootNode(target) {
    while (this.parent[target] != target) {
      this.parent[target] = this.parent[this.parent[target]];
      target = this.parent[target];
    }
    return target;
  }

};

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function (n, edges, source, destination) {
  if (source === destination) return true;
  const uf = new UnionFind();
  edges.forEach(pairs => {
    uf.unionNode(pairs[0], pairs[1]);
  });

  return uf.connected(source, destination);
};