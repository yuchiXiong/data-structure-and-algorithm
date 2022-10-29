/**
 * @param {string[][]} orders
 * @return {string[][]}
 */
var displayTable = function (orders) {
  const foods = [...new Set(orders.map(i => i[2]))].sort();

  const hash = {};
  for (let i = 0; i < orders.length; i++) {
    const order = orders[i];
    hash[order[1]] = hash[order[1]] || {};
    hash[order[1]][order[2]] = hash[order[1]][order[2]] ? hash[order[1]][order[2]] + 1 : 1;
  }

  return [['Table', ...foods]].concat(Object.keys(hash).sort((a, b) => a - b).map(key => [key, ...foods.map(food => (hash[key][food] || 0).toString())]));
};