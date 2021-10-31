/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
    const set1 = new Set('q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p');
    const set2 = new Set('a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l');
    const set3 = new Set('z', 'x', 'c', 'v', 'b', 'n', 'm');

    return words.filter(word => {
        return word.split('').every(char => keyWordMap[0].includes(char.toLowerCase())) ||
            word.split('').every(char => keyWordMap[1].includes(char.toLowerCase())) ||
            word.split('').every(char => keyWordMap[2].includes(char.toLowerCase()))
    })
};

let words;

words = ["Hello", "Alaska", "Dad", "Peace"]
console.log(findWords(words)); // ["Alaska","Dad"]

words = ["omk"];
console.log(findWords(words)); // []


words = ["adsdf", "sfd"];
console.log(findWords(words)); // ["adsdf","sfd"]
