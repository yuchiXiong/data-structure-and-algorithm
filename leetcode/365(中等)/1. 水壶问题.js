/**
 * @param {number} jug1Capacity
 * @param {number} jug2Capacity
 * @param {number} targetCapacity
 * @return {boolean}
 */
var canMeasureWater = function (jug1Capacity, jug2Capacity, targetCapacity) {
  if (jug1Capacity + jug2Capacity < targetCapacity) return false;

  return targetCapacity % gcd(jug1Capacity, jug2Capacity) === 0;
};

const gcd = (a, b) => {
  if (b == 0) return a;
  return gcd(b, a % b);
}