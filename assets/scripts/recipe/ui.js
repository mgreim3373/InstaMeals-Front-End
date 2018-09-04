'use strict'
const store = require('../store')

const deleteRecipeSuccess = function () {
  console.log('deleted')
  $('.deleteRecipe input[name="id"]').val('')
}

const addRecipeFailure = function (data) {
  console.log('fail')
  $('#recipe input[name="id"]').val('')
  $('#recipe input[name="prep_time"]').val('')
  $('#recipe input[name="name"]').val('')
  $('#recipe input[name="cook_time"]').val('')
  $('#recipe input[name="serving_size"]').val('')
  $('#recipe input[name="pot_mode"]').val('')
  $('#recipe input[name="pot_pressure"]').val('')
  $('#recipe input[name="ingredient"]').val('')
  $('#recipe input[name="prep_instruction"]').val('')
  $('#recipe input[name="photo"]').val('')
}

const updateRecipeSuccess = function (data) {
  console.log('success')
  $('#recipeUpdate input[name="id"]').val('')
  $('#recipeUpdate input[name="prep_time"]').val('')
  $('#recipeUpdate input[name="name"]').val('')
  $('#recipeUpdate input[name="cook_time"]').val('')
  $('#recipeUpdate input[name="serving_size"]').val('')
  $('#recipeUpdate input[name="pot_mode"]').val('')
  $('#recipeUpdate input[name="pot_pressure"]').val('')
  $('#recipeUpdate input[name="ingredient"]').val('')
  $('#recipeUpdate input[name="prep_instruction"]').val('')
  $('#recipe input[name="photo"]').val('')
}

const updateRecipeFailure = function (data) {
  console.log('fail')
  $('#recipeUpdate input[name="id"]').val('')
  $('#recipeUpdate input[name="prep_time"]').val('')
  $('#recipeUpdate input[name="name"]').val('')
  $('#recipeUpdate input[name="cook_time"]').val('')
  $('#recipeUpdate input[name="serving_size"]').val('')
  $('#recipeUpdate input[name="pot_mode"]').val('')
  $('#recipeUpdate input[name="pot_pressure"]').val('')
  $('#recipeUpdate input[name="ingredient"]').val('')
  $('#recipeUpdate input[name="prep_instruction"]').val('')
  $('#recipe input[name="photo"]').val('')
}

const selectRecipeFailure = function (data) {
  $('#selectRecipe input[name="id"]').val('')
  console.log('fail')
}

const deleteRecipeFailure = function (data) {
  $('.deleteRecipe input[name="id"]').val('')
  console.log('fail')
}

module.exports = {
deleteRecipeSuccess,
updateRecipeSuccess,
updateRecipeFailure,
deleteRecipeFailure,
selectRecipeFailure,
addRecipeFailure
}
