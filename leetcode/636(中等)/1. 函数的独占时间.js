/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
var exclusiveTime = function (n, logs) {
  const stack = [];
  const res = new Array(n).fill(0);
  for (const log of logs) {
    const idx = parseInt(log.substring(0, log.indexOf(':')));
    const type = log.substring(log.indexOf(':') + 1, log.lastIndexOf(':'));
    const timestamp = parseInt(log.substring(log.lastIndexOf(':') + 1));
    if ("start" === type) {
      if (stack.length) {
        res[stack[stack.length - 1][0]] += timestamp - stack[stack.length - 1][1];
        stack[stack.length - 1][1] = timestamp;
      }
      stack.push([idx, timestamp]);
    } else {
      const t = stack.pop();
      res[t[0]] += timestamp - t[1] + 1;
      if (stack.length) {
        stack[stack.length - 1][1] = timestamp + 1;
      }
    }
  }
  return res;
};

console.log(exclusiveTime(2, ["0:start:0", "1:start:2", "1:end:5", "0:end:6"])); // [3,4]
console.log(exclusiveTime(1, ["0:start:0", "0:start:2", "0:end:5", "0:start:6", "0:end:6", "0:end:7"])); // [8]
console.log(exclusiveTime(2, ["0:start:0", "0:start:2", "0:end:5", "1:start:6", "1:end:6", "0:end:7"])); // [7,1]
console.log(exclusiveTime(2, ["0:start:0", "0:start:2", "0:end:5", "1:start:7", "1:end:7", "0:end:8"])); // [8,1]
console.log(exclusiveTime(1, ["0:start:0", "0:end:0"])); // [1]

// [17,98]
console.log(exclusiveTime(2, ["0:start:0", "1:start:5", "1:end:102", "0:end:114"]));


// [20, 14, 35, 7, 6, 9, 10, 14]
console.log(exclusiveTime(8, ["0:start:0", "1:start:5", "2:start:6", "3:start:9", "4:start:11", "5:start:12", "6:start:14", "7:start:15", "1:start:24", "1:end:29", "7:end:34", "6:end:37", "5:end:39", "4:end:40", "3:end:45", "0:start:49", "0:end:54", "5:start:55", "5:end:59", "4:start:63", "4:end:66", "2:start:69", "2:end:70", "2:start:74", "6:start:78", "0:start:79", "0:end:80", "6:end:85", "1:start:89", "1:end:93", "2:end:96", "2:end:100", "1:end:102", "2:start:105", "2:end:109", "0:end:114"]))

// // [7,1]
// console.log(exclusiveTime(2, ["0:start:0", "0:start:2", "0:end:5", "1:start:6", "1:end:6", "0:end:7"]));

// console.time('timeout')
// console.log(exclusiveTime(2, ["0:start:0", "1:start:1", "1:end:10000000", "0:end:100000000"]));
// console.timeEnd('timeout')