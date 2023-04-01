/**
 * @param {string} s
 * @return {string}
 */
var maskPII = function (s) {
  if (s.includes('@')) {
    const [userName, domain] = s.split('@');
    return userName[0].toLowerCase() + '*****' + userName[userName.length - 1].toLowerCase() + '@' + domain.split('').map(char => char.toLowerCase()).join('');
  } else {
    const tel = s.split('').filter(char => !['(', ')', '-', '+', ' '].includes(char)).join('');
    const localTel = tel.slice(tel.length - 4, tel.length);
    switch (tel.length) {
      case 10:
        return `***-***-${localTel}`;
      case 11:
        return `+*-***-***-${localTel}`;
      case 12:
        return `+**-***-***-${localTel}`
      case 13:
        return `+***-***-***-${localTel}`
    }
  }
};