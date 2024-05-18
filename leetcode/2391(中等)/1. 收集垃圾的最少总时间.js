/**
 * @param {string[]} garbage
 * @param {number[]} travel
 * @return {number}
 */
var garbageCollection = function(garbage, travel) {
  return ['M', 'P', 'G'].reduce((result, curGarbage) => {
      let lastIndex = -1
      let garbageCount = 0;

      for (let i = 0; i < garbage.length; i++) {
          const currentGarbage = garbage[i];
          if (currentGarbage.includes(curGarbage)) {
              lastIndex = i;
              garbageCount += count(currentGarbage, curGarbage)
          }
      }

      const _travel = travel.slice(0, lastIndex).reduce((result, cur) => cur + result, 0);

      if (lastIndex === -1) {
          return result;
      } else {
          return result + garbageCount +  _travel;
      }
  }, 0);
};

const count = (str, char) => {
  let result = 0;
  for (let i = 0; i < str.length; i++) {
      if (str[i] === char) result += 1;
  }

  return result;
}