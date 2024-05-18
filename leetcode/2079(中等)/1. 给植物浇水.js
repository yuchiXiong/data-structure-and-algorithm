/**
 * @param {number[]} plants
 * @param {number} capacity
 * @return {number}
 */
var wateringPlants = function (plants, capacity) {
  let result = 0;
  let currentCapacity = capacity;

  for (let i = -1; i < plants.length; i++) {
      if (i === -1) {
          result += 1;
          continue;
      }

      currentCapacity -= plants[i];

      if (i === plants.length - 1) return result;

      const nextPlantNeedNum = plants[i + 1];
      if (currentCapacity < nextPlantNeedNum) {
          result += (i + 1) * 2;

          currentCapacity = capacity;
          result += 1
      } else {
          result += 1
      }
      
  }

  return result;

};