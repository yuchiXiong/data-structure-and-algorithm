/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */
var validSquare = function (p1, p2, p3, p4) {
  const l1 = Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2);
  const l2 = Math.pow(p1[0] - p3[0], 2) + Math.pow(p1[1] - p3[1], 2);
  const l3 = Math.pow(p1[0] - p4[0], 2) + Math.pow(p1[1] - p4[1], 2);
  const l4 = Math.pow(p2[0] - p3[0], 2) + Math.pow(p2[1] - p3[1], 2);
  const l5 = Math.pow(p2[0] - p4[0], 2) + Math.pow(p2[1] - p4[1], 2);
  const l6 = Math.pow(p3[0] - p4[0], 2) + Math.pow(p3[1] - p4[1], 2);

  return new Set([l1, l2, l3, l4, l5, l6]).size === 2;
};