'use strict'
const store = require('../store')


const deleteRecipeSuccess = function () {
  console.log('deleted')
}

const addRecipeSuccess = function (data) {
  console.log(data)
}

const updateRecipeSuccess = function (data) {
  console.log(data)
}

module.exports = {
deleteRecipeSuccess,
updateRecipeSuccess,
addRecipeSuccess
}
