/**
 * @param {string} password
 * @return {boolean}
 */
var strongPasswordCheckerII = function (password) {
  if (password.length < 8) return false;

  if (!password.split('').some(i => /[a-z]/.test(i))) return false;

  if (!password.split('').some(i => /[A-Z]/.test(i))) return false;

  if (!password.split('').some(i => /[0-9]/.test(i))) return false;

  if (!password.split('').some(i => '!@#$%^&*()-+'.includes(i))) return false;

  if (password.split('').some(notDoubleSameChar)) return false;

  return true;
};

const notDoubleSameChar = (char, i, array) => {
  if (i === 0) return false;
  else {
    return array[i - 1] === char
  }
}