/**
 * @param {string} sentence
 * @param {number} discount
 * @return {string}
 */
var discountPrices = function (sentence, discount) {
  const words = sentence.split(' ')

  return words.map(word => {
    if (isPrice(word)) {
      const _word = replacePrice(word, discount)
      return _word
    }
    return word
  }).join(' ')
};

const isPrice = (word) => {
  if (word.length < 2) return false
  if (!word.startsWith('$')) return false
  const price = word.slice(1)

  if (isNaN(Number(price))) return false

  if (!/^[0-9]*$/.test(price)) return false

  return true
}

const replacePrice = (word, discount) => {
  const price = word.slice(1)
  const priceNumber = Number(price)

  return `$${(priceNumber * (1 - discount / 100)).toFixed(2)}`
}

// "there are $0.50 $1.00 and 5$ candies in the shop"
console.log(discountPrices(
  "there are $1 $2 and 5$ candies in the shop", 50
) === "there are $0.50 $1.00 and 5$ candies in the shop")

// "1 2 $0.00 4 $0.00 $0.00 7 8$ $0.00 $10$"
console.log(discountPrices(
  "1 2 $3 4 $5 $6 7 8$ $9 $10$", 100
) === "1 2 $0.00 4 $0.00 $0.00 7 8$ $0.00 $10$")


console.log(discountPrices(
  "$76111 ab $6 $", 48
) === "$39577.72 ab $3.12 $")

console.log(discountPrices(
  "$1e9", 50
) === '$1e9')

console.log(discountPrices(
  "$0x3f", 50
) === "$0x3f")