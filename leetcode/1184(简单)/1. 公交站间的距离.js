/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function (distance, start, destination) {
  let l = start, r = start;
  let ansl = ansr = 0;
  while (l !== destination || r !== destination) {
    if (l !== destination) {
      l--;
      if (l < 0) {
        l = distance.length - 1;
      }
      ansl += distance[l];
    }

    if (r !== destination) {
      ansr += distance[r];
      r++;
      if (r >= distance.length) {
        r = 0;
      }
    }
  }

  return Math.min(ansl, ansr);
};

// console.log(distanceBetweenBusStops([1, 2, 3, 4], 0, 1)); // 1
// console.log(distanceBetweenBusStops([1, 2, 3, 4], 0, 2)); // 3
// console.log(distanceBetweenBusStops([1, 2, 3, 4], 0, 3)); // 4
console.log(distanceBetweenBusStops([6, 47, 48, 31, 10, 27, 46, 33, 52, 33, 38, 25, 32, 45, 36, 3, 0, 33, 22, 53, 8, 13, 18, 1, 44, 41, 14, 5, 38, 25, 48], 22, 0))