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

const selectRecipeSuccess = function (data) {
  console.log(data)
  const selectRecipeHtml = RecipesTemplate({ recipes: data.recipes })
  $('.content').html(selectRecipeHtml)
}

module.exports = {
deleteRecipeSuccess,
selectRecipeSuccess,
updateRecipeSuccess,
addRecipeSuccess
}
