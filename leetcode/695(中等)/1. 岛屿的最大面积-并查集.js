class UnionFind {
  constructor() {
    this.parent = {};
    this.treeSize = {};
    this.maxSize = 0;
  }

  unionNode(a, b) {
    const parentB = this.getRootNode(b);
    const parentA = this.getRootNode(a);

    if (parentA === undefined) {
      this.parent[a] = a;
      this.treeSize[a] = 1;
    }
    if (parentB === undefined) {
      this.parent[b] = b;
      this.treeSize[b] = 1;
    }

    this.maxSize = Math.max(this.treeSize[a], this.treeSize[b], this.maxSize);

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
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  const uf = new UnionFind();

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        const cur = i * grid[i].length + j;
        uf.unionNode(cur, cur);

        if (j - 1 >= 0 && grid[i][j - 1] === 1) {
          uf.unionNode(cur - 1, cur);
        }
        if (i - 1 >= 0 && grid[i - 1][j] === 1) {
          uf.unionNode(cur - grid[i].length, cur);
        }
      }
    }
  }

  return uf.maxSize;
};



console.log(maxAreaOfIsland([[1, 0, 0, 0], [1, 0, 0, 0], [0, 1, 1, 1], [0, 1, 0, 0]]));
console.log(maxAreaOfIsland([[0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0], [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0], [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]]));
console.log(maxAreaOfIsland([[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]));
console.log(maxAreaOfIsland([[1]])); // 1
