'use strict'
const store = require('../store')

const deleteRecipeSuccess = function () {
  $('.deleteRecipe input[name="id"]').val('Delete Success')
  $('.deleteRecipe input[name="id"]').css('color','green')
  setTimeout(function(){
    $('.deleteRecipe input[name="id"]').val('')
    $('.deleteRecipe input[name="id"]').css('color','black')

  }, 1000)
}

const addRecipeFailure = function (data) {
  console.log('fail')
  $('#recipe input[name="prep_time"]').val('')
  $('#recipe input[name="name"]').val('')
  $('#recipe input[name="cook_time"]').val('')
  $('#recipe input[name="serving_size"]').val('')
  $('#recipe input[name="pot_mode"]').val('')
  $('#recipe input[name="pot_pressure"]').val('')
  $('#recipe input[name="ingredient"]').val('')
  $('#recipe input[name="prep_instruction"]').val('')
  $('#recipe input[name="photo"]').val('')

  $('#recipe input[name="prep_time"]').css('color', 'red')
  $('#recipe input[name="name"]').css('color', 'red')
  $('#recipe input[name="cook_time"]').css('color', 'red')
  $('#recipe input[name="serving_size"]').css('color', 'red')
  $('#recipe input[name="pot_mode"]').css('color', 'red')
  $('#recipe input[name="pot_pressure"]').css('color', 'red')
  $('#recipe input[name="ingredient"]').css('color', 'red')
  $('#recipe input[name="prep_instruction"]').css('color', 'red')
  $('#recipe input[name="photo"]').css('color', 'red')

  $('#recipe input[name="prep_time"]').val('Invalid Number')
  $('#recipe input[name="name"]').val('Invalid Input')
  $('#recipe input[name="cook_time"]').val('Invalid Number')
  $('#recipe input[name="serving_size"]').val('Invalid Number')
  $('#recipe input[name="pot_mode"]').val('Invalid Input')
  $('#recipe input[name="pot_pressure"]').val('Invalid Input')
  $('#recipe input[name="ingredient"]').val('Invalid Input')
  $('#recipe input[name="prep_instruction"]').val('Invalid Number')
  $('#recipe input[name="photo"]').val('Invalid URL')

setTimeout(function() {
  $('#recipe input[name="prep_time"]').val('')
  $('#recipe input[name="name"]').val('')
  $('#recipe input[name="cook_time"]').val('')
  $('#recipe input[name="serving_size"]').val('')
  $('#recipe input[name="pot_mode"]').val('')
  $('#recipe input[name="pot_pressure"]').val('')
  $('#recipe input[name="ingredient"]').val('')
  $('#recipe input[name="prep_instruction"]').val('')
  $('#recipe input[name="photo"]').val('')

  $('#recipe input[name="id"]').css('color', 'black')
  $('#recipe input[name="prep_time"]').css('color', 'black')
  $('#recipe input[name="name"]').css('color', 'black')
  $('#recipe input[name="cook_time"]').css('color', 'black')
  $('#recipe input[name="serving_size"]').css('color', 'black')
  $('#recipe input[name="pot_mode"]').css('color', 'black')
  $('#recipe input[name="pot_pressure"]').css('color', 'black')
  $('#recipe input[name="ingredient"]').css('color', 'black')
  $('#recipe input[name="prep_instruction"]').css('color', 'black')
  $('#recipe input[name="photo"]').css('color', 'black')
}, 1000
)
}

const updateRecipeFailure = function (data) {
  console.log('fail')
  $('.recipeUpdate input[name="id"]').val('Invalid Number')
  $('.recipeUpdate input[name="prep_time"]').val('Invalid Number')
  $('.recipeUpdate input[name="name"]').val('Invalid Input')
  $('.recipeUpdate input[name="cook_time"]').val('Invalid Number')
  $('.recipeUpdate input[name="serving_size"]').val('Invalid Number')
  $('.recipeUpdate input[name="pot_mode"]').val('Invalid Input')
  $('.recipeUpdate input[name="pot_pressure"]').val('Invalid Input')
  $('.recipeUpdate input[name="ingredient"]').val('Invalid Input')
  $('.recipeUpdate input[name="prep_instruction"]').val('Invalid Input')
  $('.recipeUpdate input[name="photo"]').val('Invalid URL')

  $('.recipeUpdate input[name="id"]').css('color', 'red')
  $('.recipeUpdate input[name="prep_time"]').css('color', 'red')
  $('.recipeUpdate input[name="name"]').css('color', 'red')
  $('.recipeUpdate input[name="cook_time"]').css('color', 'red')
  $('.recipeUpdate input[name="serving_size"]').css('color', 'red')
  $('.recipeUpdate input[name="pot_mode"]').css('color', 'red')
  $('.recipeUpdate input[name="pot_pressure"]').css('color', 'red')
  $('.recipeUpdate input[name="ingredient"]').css('color', 'red')
  $('.recipeUpdate input[name="prep_instruction"]').css('color', 'red')
  $('.recipeUpdate input[name="photo"]').css('color', 'red')

setTimeout(function(){
  $('.recipeUpdate input[name="id"]').val('')
  $('.recipeUpdate input[name="prep_time"]').val('')
  $('.recipeUpdate input[name="name"]').val('')
  $('.recipeUpdate input[name="cook_time"]').val('')
  $('.recipeUpdate input[name="serving_size"]').val('')
  $('.recipeUpdate input[name="pot_mode"]').val('')
  $('.recipeUpdate input[name="pot_pressure"]').val('')
  $('.recipeUpdate input[name="ingredient"]').val('')
  $('.recipeUpdate input[name="prep_instruction"]').val('')
  $('.recipeUpdate input[name="photo"]').val('')

  $('.recipeUpdate input[name="id"]').css('color', 'black')
  $('.recipeUpdate input[name="prep_time"]').css('color', 'black')
  $('.recipeUpdate input[name="name"]').css('color', 'black')
  $('.recipeUpdate input[name="cook_time"]').css('color', 'black')
  $('.recipeUpdate input[name="serving_size"]').css('color', 'black')
  $('.recipeUpdate input[name="pot_mode"]').css('color', 'black')
  $('.recipeUpdate input[name="pot_pressure"]').css('color', 'black')
  $('.recipeUpdate input[name="ingredient"]').css('color', 'black')
  $('.recipeUpdate input[name="prep_instruction"]').css('color', 'black')
  $('.recipeUpdate input[name="photo"]').css('color', 'black')
}, 1000
)
}

const selectRecipeFailure = function (data) {
  $('#selectRecipe input[name="id"]').val('Invalid Entry')
  $('#selectRecipe input[name="id"]').css('color', 'red')
setTimeout(function() {
  $('#selectRecipe input[name="id"]').val('')
  $('#selectRecipe input[name="id"]').css('color', 'black')
}, 1000)
}

const deleteRecipeFailure = function (data) {
  $('.deleteRecipe input[name="id"]').val('Invalid Number')
  $('.deleteRecipe input[name="id"]').css('color','red')
  setTimeout(function(){
    $('.deleteRecipe input[name="id"]').val('')
    $('.deleteRecipe input[name="id"]').css('color','black')
  }, 1000)
}

module.exports = {
deleteRecipeSuccess,
updateRecipeFailure,
deleteRecipeFailure,
selectRecipeFailure,
addRecipeFailure
}
