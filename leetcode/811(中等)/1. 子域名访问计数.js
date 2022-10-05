/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function (cpdomains) {
  const hash = {};

  cpdomains.forEach(cpdomain => {
    const [count, fullDomain] = cpdomain.split(' ');
    const domain = fullDomain.split('.');

    let _domain = '';
    for (let i = domain.length - 1; i >= 0; i--) {
      _domain = _domain ? `${domain[i]}.${_domain}` : domain[i];
      hash[_domain] = hash[_domain] ? hash[_domain] + Number(count) : Number(count);
    }
  });

  return Object.keys(hash).map(key => `${hash[key]} ${key}`);
};

console.log(subdomainVisits(["9001 discuss.leetcode.com"])); // ["9001 leetcode.com","9001 discuss.leetcode.com","9001 com"]
console.log(subdomainVisits(["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"])); // ["901 mail.com","50 yahoo.com","900 google.mail.com","5 wiki.org","5 org","1 intel.mail.com","951 com"]