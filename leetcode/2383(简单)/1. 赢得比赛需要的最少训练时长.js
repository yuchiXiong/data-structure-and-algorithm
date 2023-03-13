/**
 * @param {number} initialEnergy
 * @param {number} initialExperience
 * @param {number[]} energy
 * @param {number[]} experience
 * @return {number}
 */
var minNumberOfHours = function (initialEnergy, initialExperience, energy, experience) {
  let result = 0;

  const totalEnergy = energy.reduce((sum, cur) => sum + cur, 0)
  if (totalEnergy >= initialEnergy) result += totalEnergy - initialEnergy + 1;

  let curExperience = initialExperience;
  experience.forEach(e => {
    if (e >= curExperience) {
      const tmp = e - curExperience + 1;
      curExperience += tmp;
      result += tmp;
    }

    curExperience += e;
  });

  return result;
};