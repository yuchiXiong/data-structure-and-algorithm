/**
 * @param {string} s
 * @return {boolean}
 */
var checkOnesSegment = function (s) {
  const firstZeroPos = s.indexOf('0');
  const lastOnePos = s.lastIndexOf('1');

  return (firstZeroPos === -1 ? s.length + 1 : firstZeroPos) > lastOnePos;
};