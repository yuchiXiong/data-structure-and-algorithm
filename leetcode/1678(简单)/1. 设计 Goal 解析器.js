/**
 * @param {string} command
 * @return {string}
 */
var interpret = function (command) {
  return command.replace(/\(\)/g, 'o').replace(/\(/g, '').replace(/\)/g, '');
};