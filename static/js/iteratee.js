module.exports = function (add, array) {
  let sum = 0
  for (let i = 0; i < array.length; i++) {
    if (array[i].type === true) {
      sum = add(array[i].count * array[i].price, sum)
    }
  }
  return sum
}
