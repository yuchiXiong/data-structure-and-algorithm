/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function (paths) {
  const starts = paths.map(item => item[0]);
  return paths.map(item => item[1]).filter(i => !starts.includes(i))[0];
};

console.log(destCity([["London", "New York"], ["New York", "Lima"], ["Lima", "Sao Paulo"]])) // Sao Paulo
console.log(destCity([["B", "C"], ["D", "B"], ["C", "A"]])) // a
console.log(destCity([["A", "Z"]])) // z
console.log(destCity([["A", "Z"], ["B", "W"], ["Z", "B"]])) // z