/**
 * @param {number[]} tasks
 * @return {number}
 */
var minimumRounds = function (tasks) {
  const countMap = tasks.reduce((result, cur) => {
      result[cur] = !result[cur] ? 1 : result[cur] + 1;
      return result;
  }, {});

  return Object.values(countMap).reduce((result, cur) => {
      if (result === -1) return -1;

      if (cur >= 3) {
          return result + Math.ceil(cur / 3)
      } else if (cur === 2) {
          return result + 1
      } else {
          return -1
      }
  }, 0)

};