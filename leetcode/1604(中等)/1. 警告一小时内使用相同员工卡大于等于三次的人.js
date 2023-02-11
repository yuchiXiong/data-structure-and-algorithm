/**
 * @param {string[]} keyName
 * @param {string[]} keyTime
 * @return {string[]}
 */
var alertNames = function (keyName, keyTime) {
  const hash = keyName.reduce((obj, name, index) => {
    obj[name] = obj[name] !== undefined ? obj[name].concat(keyTime[index]) : [keyTime[index]];
    return obj;
  }, {});

  return Object.keys(hash).filter(i => {
    const times = hash[i].sort();
    const cur = times.slice(0, 3);

    for (let i = 2; i < times.length; i++) {
      if (isMoreOneHours(cur[0], cur[2])) return true;
      else {
        cur.shift();
        cur.push(times[i + 1]);
      }
    }
  }).sort();
};

const isMoreOneHours = (start, end) => {
  const startAt = new Date(2000, 1, 1, start.split(":")[0], start.split(":")[1], 0);
  const endAt = new Date(2000, 1, 1, end.split(":")[0], end.split(":")[1], 0);
  return (endAt - startAt) / 1000 / 60 / 60 <= 1
}

const keyName1 = ["daniel", "daniel", "daniel", "luis", "luis", "luis", "luis"];
const keyTime1 = ["10:00", "10:40", "11:00", "09:00", "11:00", "13:00", "15:00"]

console.log(alertNames(keyName1, keyTime1)); // ["daniel"]

const keyName2 = ["alice", "alice", "alice", "bob", "bob", "bob", "bob"];
const keyTime2 = ["12:01", "12:00", "18:00", "21:00", "21:20", "21:30", "23:00"]

console.log(alertNames(keyName2, keyTime2)); // ["bob"]

const keyName3 = ["john", "john", "john"];
const keyTime3 = ["23:58", "23:59", "00:01"]

console.log(alertNames(keyName3, keyTime3)); // []

const keyName4 = ["leslie", "leslie", "leslie", "clare", "clare", "clare", "clare"];
const keyTime4 = ["13:00", "13:20", "14:00", "18:00", "18:51", "19:30", "19:49"]

console.log(alertNames(keyName4, keyTime4)); // ["clare","leslie"]

