/**
 * @param {string} number
 * @return {string}
 */
var reformatNumber = function (number) {
  const origin = number.replaceAll('-', '').replaceAll(' ', '');
  let ans = [];
  let i = 0;
  for (; i <= origin.length; i += 3) {
    if (origin.length - i <= 4) break;
    ans.push(origin.substr(i, 3));
  }

  switch (origin.length - i) {
    case 2:
      ans.push(origin.substr(i, 2));
      break;
    case 3:
      ans.push(origin.substr(i, 3));
      break;
    case 4:
      ans.push(origin.substr(i, 2));
      ans.push(origin.substr(i + 2, 2));
      break;
  }

  return ans.join('-');

};