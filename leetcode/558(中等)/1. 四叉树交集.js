/**
 * // Definition for a QuadTree node.
 * function Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */

/**
 * @param {Node} quadTree1
 * @param {Node} quadTree2
 * @return {Node}
 */
var intersect = function (quadTree1, quadTree2) {
  if (quadTree1 === null) return quadTree2;
  if (quadTree2 === null) return quadTree1;
  if (quadTree1.isLeaf && quadTree1.val) return quadTree1;
  if (quadTree2.isLeaf && quadTree2.val) return quadTree2;

  const topLeft = intersect(quadTree1.topLeft, quadTree2.topLeft);
  const topRight = intersect(quadTree1.topRight, quadTree2.topRight);
  const bottomLeft = intersect(quadTree1.bottomLeft, quadTree2.bottomLeft);
  const bottomRight = intersect(quadTree1.bottomRight, quadTree2.bottomRight);

  if (topLeft?.val === topRight?.val
    && topRight?.val === bottomLeft?.val
    && bottomLeft?.val === bottomRight?.val
    && topLeft?.isLeaf
    && topRight?.isLeaf
    && bottomLeft?.isLeaf
  ) {
    return new Node(topLeft === null ? null : topLeft.val, true, null, null, null, null);
  } else {
    return new Node(
      quadTree1.val || quadTree2.val,
      quadTree1.isLeaf && quadTree2.isLeaf,
      topLeft,
      topRight,
      bottomLeft,
      bottomRight,
    );
  }
};