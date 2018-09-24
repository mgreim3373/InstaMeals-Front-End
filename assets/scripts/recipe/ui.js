'use strict'

const RecipesTemplate = require('../templates/recipes.handlebars')
const RecipeTemplate = require('../templates/recipe.handlebars')
const authUI = require('../auth/ui')
const store = require('../store')
const api = require('./api')


const addRecipeFailure = function (data) {
  $('#recipe input[name="prep_time"]').val('Invalid Number')
  $('#recipe input[name="name"]').val('Invalid Input')
  $('#recipe input[name="cook_time"]').val('Invalid Number')
  $('#recipe input[name="serving_size"]').val('Invalid Number')
  $('#recipe input[name="pot_mode"]').val('Invalid Input')
  $('#recipe input[name="pot_pressure"]').val('Invalid Input')
  $('#recipe input[name="ingredient"]').val('Invalid Input')
  $('#recipe input[name="prep_instruction"]').val('Invalid Number')
  $('#recipe input[name="photo"]').val('Invalid URL')

  $('#recipe input[name="prep_time"]').css('color', 'red')
  $('#recipe input[name="name"]').css('color', 'red')
  $('#recipe input[name="cook_time"]').css('color', 'red')
  $('#recipe input[name="serving_size"]').css('color', 'red')
  $('#recipe input[name="pot_mode"]').css('color', 'red')
  $('#recipe input[name="pot_pressure"]').css('color', 'red')
  $('#recipe input[name="ingredient"]').css('color', 'red')
  $('#recipe input[name="prep_instruction"]').css('color', 'red')
  $('#recipe input[name="photo"]').css('color', 'red')

  setTimeout(function () {
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
  setTimeout(function () {
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
  setTimeout(function () {
  $('#selectRecipe input[name="id"]').val('Invalid Entry')
  $('#selectRecipe input[name="id"]').css('color', 'red')
  setTimeout(function () {
    $('#selectRecipe input[name="id"]').val('')
    $('#selectRecipe input[name="id"]').css('color', 'black')
  }, 500)
}, 107)
}

const updateRecipeSuccess = function (data) {
  closeModal()
  $('.recipeUpdate input').val('')
}

// const selectRecipeSuccess = function (data) {
//   const selectUpdatedRecipeHtml = RecipeTemplate({ recipe: data.recipe })
//   $('.content').addClass('hide')
//   $('.updateRecipeDiv').html(selectUpdatedRecipeHtml)
//   $('.updateRecipeDiv').removeClass('hide')
//   authUI.closeModalBackground()
// }

const selectRecipeSuccess = function (data) {
  addHandlebarContent(data)
  $('.content').removeClass('hide')
  $('#selectRecipe input[name="id"]').val('')
}

// const showUpdatedRecipeDiv = function () {
//   $('.updateRecipeDiv').removeClass('hide')
// }

const deleteRecipeFailure = function (data) {
}

const closeModal = function () {
  $('#recipeUpdateModal').modal('hide')
  $('body').removeClass('modal-open')
  $('.modal-backdrop').remove()
}

const addHandlebarContent = function (data) {
  const selectRecipeHtml = RecipeTemplate({ recipe: data.recipe })
  $('.content').html(selectRecipeHtml)
}

const addRecipeSuccess = function (data) {
  $('#recipe input').val('')
  hideModal()
  store.id = data.recipe.id
  api.selectRecipe()
    .then(selectRecipeSuccess)
}

const hideModal = function () {
  $('#addRecipeModal').modal('hide')
  $('body').removeClass('modal-open')
  $('.modal-backdrop').remove()
}

module.exports = {
  updateRecipeFailure,
  deleteRecipeFailure,
  selectRecipeFailure,
  addRecipeFailure,
  selectRecipeSuccess,
  updateRecipeSuccess,
  addRecipeSuccess
}
