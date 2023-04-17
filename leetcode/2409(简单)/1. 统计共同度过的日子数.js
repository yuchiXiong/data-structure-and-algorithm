/**
 * @param {string} arriveAlice
 * @param {string} leaveAlice
 * @param {string} arriveBob
 * @param {string} leaveBob
 * @return {number}
 */
var countDaysTogether = function(arriveAlice, leaveAlice, arriveBob, leaveBob) {
    const alice = getDays(arriveAlice, leaveAlice);
    const bob = getDays(arriveBob, leaveBob);

    const all = [...new Set(alice.concat(bob))];

    return alice.length + bob.length - all.length;
};

const getDays = (arrive, leave) => {
    const MAPS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let arriveMonth = Number(arrive.split('-')[0]);
    let arriveDay = Number(arrive.split('-')[1]);

    const leaveMonth = Number(leave.split('-')[0]);
    const leaveDay = Number(leave.split('-')[1]);

    if (arriveMonth === leaveMonth) {
        return new Array(leaveDay - arriveDay + 1).fill('').map((_, index) => `${arriveMonth}-${index + arriveDay}`);
    }

    let result = [];
    while (arriveMonth !== leaveMonth) {
        result = result.concat(new Array(MAPS[arriveMonth - 1] - arriveDay + 1).fill('').map((_, index) => `${arriveMonth}-${arriveDay + index}`));
        arriveMonth += 1;
        arriveDay = 1;
    }

    result = result.concat(new Array(leaveDay).fill('').map((_, index) => `${leaveMonth}-${index + 1}`))

    return result;
}

