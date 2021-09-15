function validPalindrome(s) {
    var result = false;
    for (var i = 0; i < s.length; i += 1) {
        var dup = s.split('');
        dup.splice(i, 1);
        if (dup.join('') === dup.reverse().join('')) {
            result = true;
            break;
        }
    }
    return result;
}
;
console.log(validPalindrome('aba')); // true
console.log(validPalindrome('abca')); // true
console.log(validPalindrome('abc')); // false
