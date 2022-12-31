/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function (seats, students) {
  const comparable = (a, b) => a - b;
  const sortedSeats = seats.sort(comparable);
  const sortedStudents = students.sort(comparable);
  return sortedSeats.reduce((sum, cur, index) => sum + Math.abs(cur - sortedStudents[index]), 0);
};