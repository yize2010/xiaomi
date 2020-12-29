let iteratee = require('./iteratee')
let add = require('./add')

module.exports = function (List) {
  return iteratee(add, List)
}
