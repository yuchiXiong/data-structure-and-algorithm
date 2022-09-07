/**
 * @param {string} text
 * @return {string}
 */
var reorderSpaces = function (text) {
  const worlds = text.split(' ').filter(i => i !== '');
  let spaceCount = 0;

  for (let i = 0; i < text.length; i++) {
    text[i] === ' ' && spaceCount++;
  }

  if (worlds.length === 1) return worlds[0] + ' '.repeat(spaceCount);

  return worlds.join(' '.repeat(Math.floor(spaceCount / (worlds.length - 1)))) + ' '.repeat(spaceCount % (worlds.length - 1))
};

console.log(reorderSpaces("  this   is  a sentence ") === "this   is   a   sentence");
console.log(reorderSpaces(" practice   makes   perfect") === "practice   makes   perfect ");
console.log(reorderSpaces("hello   world") === "hello   world");
console.log(reorderSpaces("  walks  udp package   into  bar a") === "walks  udp  package  into  bar  a ");
console.log(reorderSpaces("a") === "a");
console.log(reorderSpaces("  hello") === "hello  ")