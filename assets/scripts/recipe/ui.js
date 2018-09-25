'use strict'

const RecipesTemplate = require('../templates/recipes.handlebars')
const RecipeTemplate = require('../templates/recipe.handlebars')
const store = require('../store')

const showRecipeSuccess = function (data) {
  if (data.recipes[0]) {
    addHandlebarsContent(data)
  } else {
    $('.content').text('No recipes!')
    setTimeout(function () {
      $('.content').text('')
    }, 1000)
  }
  $('.content').removeClass('hide')
}

const selectRecipeSuccess = function (data) {
  addHandlebarContent(data)
  $('.content').removeClass('hide')
}

const selectRecipeFailure = function (data) {
  setTimeout(function () {
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

const updateRecipeFailure = function (data) {
  showErrorMessage()
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

const addHandlebarsContent = function (data) {
  const selectRecipesHtml = RecipesTemplate({ recipes: data.recipes })
  $('.content').html(selectRecipesHtml)
}

const addRecipeSuccess = function (data) {
  store.id = data.recipe.id
  $('#recipe input').val('')
  hideModal()
}

const addRecipeFailure = function (data) {
  showErrorMessage()
}

const hideModal = function () {
  $('#addRecipeModal').modal('hide')
  $('body').removeClass('modal-open')
  $('.modal-backdrop').remove()
}

const deleteRecipeSuccess = function () {
  $('.messages').text('Deleted')
  setTimeout(function () {
    $('.messages').text('Deleted')
  }, 500)
}

const deleteRecipeFailure = function (data) {
}

const showErrorMessage = function () {
  $('.message').removeClass('hide')
  setTimeout(function () {
    $('.message').addClass('hide')
  }, 1000
  )
}

module.exports = {
  updateRecipeFailure,
  deleteRecipeFailure,
  selectRecipeFailure,
  addRecipeFailure,
  selectRecipeSuccess,
  updateRecipeSuccess,
  addRecipeSuccess,
  deleteRecipeSuccess,
  showRecipeSuccess,
  addHandlebarsContent
}
