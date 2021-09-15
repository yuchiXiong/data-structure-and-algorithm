function validPalindrome(s: string): boolean {
  let result: boolean = false;

  for (let i: number = 0; i < s.length; i += 1) {
    const dup: Array<String> = s.split('');
    dup.splice(i, 1);

    if (dup.join('') === dup.reverse().join('')) {
      result = true;
      break;
    }
  }

  return result;
};

console.log(validPalindrome('aba')); // true
console.log(validPalindrome('abca')); // true
console.log(validPalindrome('abc')); // false