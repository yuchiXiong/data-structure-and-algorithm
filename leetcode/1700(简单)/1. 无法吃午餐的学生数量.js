/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function (students, sandwiches) {
  let i = 0;
  while (students.length) {
    if (students[0] === sandwiches[0]) {
      sandwiches.shift();
      students.shift();
      i = 0;
    } else {
      const top = students.shift();
      students.push(top);
      i++;
      if (i === students.length) return students.length;
    }
  }

  return 0;
};