/**
 * ! 答案未通过 
 * @param {number[][]} grid
 * @return {number}
 */
var cherryPickup = function (grid) {
  const start = dfs(grid, 0, 0, true);
  let cur = start;
  let sum = 0;
  while (cur) {
    grid[cur.pos[0]][cur.pos[1]] = 0;
    sum += cur.current;
    if (cur.next === null && cur.pos.join(',') !== `${grid.length - 1},${grid[0].length - 1}`) return 0;
    cur = cur.next;
  }
  return sum + dfs(grid, grid.length - 1, grid[0].length - 1);
};

var dfs = (grid, i, j, left) => {
  if (left) {
    if (grid[i][j] === -1) return { val: 0, current: 0, pos: [i, j], next: null };
    if (i === grid.length - 1 && j === grid[i].length - 1) return { val: grid[i][j], current: grid[i][j], pos: [i, j], next: null };

    const right = j + 1 < grid[i].length && dfs(grid, i, j + 1, left);
    const bottom = i + 1 < grid.length && dfs(grid, i + 1, j, left);

    if (i === grid.length - 1) return { val: grid[i][j] + right.val, current: grid[i][j], pos: [i, j], next: right };
    if (j === grid[i].length - 1) return { val: grid[i][j] + bottom.val, current: grid[i][j], pos: [i, j], next: bottom };

    return {
      val: grid[i][j] + Math.max(right.val, bottom.val),
      current: grid[i][j],
      pos: [i, j],
      next: right > bottom ? right : bottom
    };
  } else {
    if (grid[i][j] === -1) return 0;
    if (i === 0 && j === 0) return 0;
    if (i === 0) return grid[i][j] + dfs(grid, i, j - 1);
    if (j === 0) return grid[i][j] + dfs(grid, i - 1, j);
    return grid[i][j] + Math.max(dfs(grid, i - 1, j), dfs(grid, i, j - 1));
  }
}

// console.dir(cherryPickup([
//   [0, 1, -1],
//   [1, 0, -1],
//   [1, 1, 1]
// ])); // 5
// console.log(cherryPickup([
//   [1, 1, -1],
//   [1, -1, 1],
//   [-1, 1, 1]
// ])); // 0
// console.log(cherryPickup([
//   [1, 1, 1, 1, 0, 0, 0],
//   [0, 0, 0, 1, 0, 0, 0],
//   [0, 0, 0, 1, 0, 0, 1],
//   [1, 0, 0, 1, 0, 0, 0],
//   [0, 0, 0, 1, 0, 0, 0],
//   [0, 0, 0, 1, 0, 0, 0],
//   [0, 0, 0, 1, 1, 1, 1]
// ])); // 15

const _sum = obj => {
  let cur = obj;
  let sum = 0;
  let path = '';
  while (cur) {
    sum += cur.current;
    path += `[${cur.pos[0]}, ${cur.pos[1]}] => `
    cur = cur.next;
  }
  return path;
}

for (let i = 0; i < 7; i++) {
  for (let j = 0; j < 7; j++) {
    console.log(_sum(dfs(
      [
        [1, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 1],
        [1, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 1]
      ], i, j, true)))
  }
}
console.log(count)
