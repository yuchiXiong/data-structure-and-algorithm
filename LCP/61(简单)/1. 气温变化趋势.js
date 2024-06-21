/**
 * @param {number[]} temperatureA
 * @param {number[]} temperatureB
 * @return {number}
 */
var temperatureTrend = function (temperatureA, temperatureB) {
  const tA = temperatureA.slice(1).map((cur, index) => {
      return comparable(cur, temperatureA[index])
  })

  const tB = temperatureB.slice(1).map((cur, index) => {
      return comparable(cur, temperatureB[index])
  })

  let cur = 0;
  let max = 0
  for (let i = 0; i < tA.length; i++) {
      if (tA[i] === tB[i]) {
          cur += 1
      } else {
          cur = 0
      }
      max = Math.max(cur, max)
  }

  return max
};

const comparable = (a, b) => {
  if (a === b) return 0

  return a > b ? 1 : -1;
}