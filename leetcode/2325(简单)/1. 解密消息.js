/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function (key, message) {
  const chars = 'abcdefghijklmnopqrstuvwxyz';
  const keys = [...new Set(key.replace(/ /g, '').split(''))];

  return message.split(' ').map(word => word.split('').map(i => chars[keys.indexOf(i)]).join('')).join(' ');
};