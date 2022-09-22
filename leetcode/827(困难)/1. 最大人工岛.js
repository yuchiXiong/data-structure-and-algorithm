// @ts-check
const fs = require('fs');
const case1 = JSON.parse(fs.readFileSync('./case1.txt', 'utf-8'));
const case2 = JSON.parse(fs.readFileSync('./case2.txt', 'utf-8'));
const case69 = JSON.parse(fs.readFileSync('./case69.txt', 'utf-8'));

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
var largestIsland = function (grid) {
  const uf = maxAreaOfIsland(grid);
  let max = uf.maxSize;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      // 当前位置是岛屿，跳过
      if (grid[i][j] === 1) continue;

      // 当前位置的四周都是海洋，最大人工岛面积为1
      if (tryDFS(grid, i, j) === 0) {
        max = max < 1 ? 1 : max;
        continue;
      }

      // 当前位置在并查集中的key
      const curNo = i * grid[i].length + j;

      const val = [...new Set([
        uf.getRootNode(curNo - grid[i].length),
        uf.getRootNode(curNo + grid[i].length),
        uf.getRootNode(j >= 1 ? curNo - 1 : -1),
        uf.getRootNode(j < grid[i].length - 1 ? curNo + 1 : -1)
      ])].map(i => uf.treeSize[i] || 0).sort((a, b) => b - a);

      max = Math.max(max, val.reduce((sum, cur) => sum + cur, 0) + 1);
    }
  }
  return max;
};


/**
 * @param {number[][]} grid
 * @return {UnionFind}
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

  return uf;
};

const tryDFS = (grid, i, j) => {
  return (i >= 1 ? (grid[i - 1][j]) : 0)
    + (i < grid.length - 1 ? grid[i + 1][j] : 0)
    + (j >= 1 ? grid[i][j - 1] : 0)
    + (j < grid[i].length - 1 ? grid[i][j + 1] : 0);
}

console.log(largestIsland([[1, 0], [0, 1]]) === 3); // 3
console.log(largestIsland([[1, 1], [1, 0]]) === 4); // 4
console.log(largestIsland([[1, 1], [1, 1]]) === 4); // 4
console.log(largestIsland(case1) === 737); // 737
console.log(largestIsland(case2) === 369); // 369
console.log(largestIsland(case69) === 1); // 1
console.log(largestIsland([[1, 0, 1, 0, 1], [0, 1, 1, 0, 1], [1, 1, 1, 0, 0], [1, 0, 1, 1, 1], [0, 0, 1, 1, 0]]) === 15); // 15
console.log(largestIsland([[0, 1, 1, 1, 1, 0], [0, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 1], [1, 0, 0, 1, 0, 0], [1, 0, 0, 1, 0, 1], [0, 1, 1, 0, 1, 0]]));