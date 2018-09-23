'use strict'

const RecipesTemplate = require('../templates/recipes.handlebars')
const RecipeTemplate = require('../templates/recipe.handlebars')
const getFormFields = require(`../../../lib/get-form-fields`)
const store = require('../store')
const api = require('./api')
const ui = require('./ui')

const onSelectRecipe = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  if (data.id !== '') {
    store.id = data.id
    api.selectRecipe()
      .then(selectRecipeSuccess)
      .catch(ui.selectRecipeFailure)
  } else {
    ui.selectRecipeFailure()
  }
}
const selectRecipeSuccess = function (data) {
  const selectRecipeHtml = RecipeTemplate({ recipe: data.recipe })
  $('.content').html(selectRecipeHtml)
  $('#selectRecipeModal').modal('hide')
  $('body').removeClass('modal-open')
  $('.modal-backdrop').remove()
  $('.updateRecipeDiv').addClass('hide')
  $('.content').removeClass('hide')
  $('.deleteRecipe').on('click', onDeleteRecipe)
  $('#selectRecipe input[name="id"]').val('')
  $('.updateRecipeButton').on('click', fillInputs)
  $('.showRecipes').on('click', onShowRecipes)
}

const onUpdateRecipe = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.updateRecipe(data)
    .then(updateRecipeSuccess)
    .catch(ui.updateRecipeFailure)
}
const updateRecipeSuccess = function (data) {
  $('.recipeUpdate input').val('')
  $('.recipeUpdate input[type="submit"]').val('Update')
  $('#recipeUpdateModal').modal('hide')
  $('body').removeClass('modal-open')
  $('.modal-backdrop').remove()
  api.selectRecipe()
    .then(selectUpdatedRecipeSuccess)
}

const selectUpdatedRecipeSuccess = function (data) {
  $('.updateRecipeDiv').removeClass('hide')
  const selectUpdatedRecipeHtml = RecipeTemplate({ recipe: data.recipe })
  $('.content').addClass('hide')
  $('.updateRecipeDiv').html(selectUpdatedRecipeHtml)
  $('.deleteRecipe').on('click', onDeleteRecipe)
  $('.updateRecipeButton').on('click', fillInputs)
  $('.showRecipes').on('click', onShowRecipes)
  $('body').removeClass('modal-open')
  $('.modal-backdrop').remove()
}

const onAddRecipe = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.addRecipe(data)
    .then(addRecipeSuccess)
    .catch(ui.addRecipeFailure)
}

const addRecipeSuccess = function (data) {
  $('#recipe input').val('')
  $('#recipe input[type="submit"]').val('Add')
  $('#addRecipeModal').modal('hide')
  $('body').removeClass('modal-open')
  $('.modal-backdrop').remove()
  store.id = data.recipe.id
  api.selectRecipe()
    .then(selectAddedRecipeSuccess)
    .catch(ui.selectRecipeFailure)
}

const selectAddedRecipeSuccess = function (data) {
  const selectRecipeHtml = RecipeTemplate({ recipe: data.recipe })
  $('.content').html(selectRecipeHtml)
  $('.selectRecipe input[name="id"]').val('')
  $('.updateRecipeDiv').addClass('hide')
  $('.content').removeClass('hide')
  $('.deleteRecipe').on('click', onDeleteRecipe)
  $('.updateRecipeButton').on('click', fillInputs)
  $('.showRecipes').on('click', onShowRecipes)
  $('body').removeClass('modal-open')
  $('.modal-backdrop').remove()
}

const onDeleteRecipe = function (event) {
  event.preventDefault()
  const deleteId = $(event.target).closest('div').data('id')
  store.id = deleteId
  api.deleteRecipe()
    .then(deleteRecipeSuccess)
    .catch(ui.deleteRecipeFailure)
}

const deleteRecipeSuccess = function () {
  $('.messages').text('Deleted')
  setTimeout(function () {
    $('.messages').text('Deleted')
    api.showRecipes()
      .then(showRecipeSuccess)
  }, 500)
}

const onShowRecipes = function (event) {
  event.preventDefault()
  api.showRecipes()
    .then(showRecipeSuccess)
    .catch(ui.selectRecipeFailure)
}

const onShowRecipesSignin = function (event) {
  api.showRecipes()
    .then(showRecipeSuccess)
    .catch(ui.selectRecipeFailure)
}

const fillInputs = function (event) {
  let recipeId = $(event.target).closest('section').data('id')
  store.id = recipeId
  let recipeName = $(event.target).closest('section').data('name')
  let recipePrepTime = $(event.target).closest('section').data('prep_time')
  let recipeCookTime = $(event.target).closest('section').data('cook_time')
  let recipeServingSize = $(event.target).closest('section').data('serving_size')
  let recipePotmode = $(event.target).closest('section').data('pot_mode')
  let recipePotPressure = $(event.target).closest('section').data('pot_pressure')
  let recipeIngredients = $(event.target).closest('section').data('ingredient')
  let recipePrep = $(event.target).closest('section').data('prep_instruction')
  let recipePhoto = $(event.target).closest('section').data('photo')

  $('.recipeUpdate input[name="id"]').val(recipeId)
  $('.recipeUpdate input[name="name"]').val(recipeName)
  $('.recipeUpdate input[name="prep_time"]').val(recipePrepTime)
  $('.recipeUpdate input[name="cook_time"]').val(recipeCookTime)
  $('.recipeUpdate input[name="serving_size"]').val(recipeServingSize)
  $('.recipeUpdate input[name="pot_mode"]').val(recipePotmode)
  $('.recipeUpdate input[name="pot_pressure"]').val(recipePotPressure)
  $('.recipeUpdate input[name="ingredient"]').val(recipeIngredients)
  $('.recipeUpdate input[name="prep_instruction"]').val(recipePrep)
  $('.recipeUpdate input[name="photo"]').val(recipePhoto)
}

const showRecipeSuccess = function (data) {
  if (data.recipes[0]) {
  const showRecipesHtml = RecipesTemplate({ recipes: data.recipes })
  $('.content').html(showRecipesHtml)
  $('.recipeUpdate').on('submit', onUpdateRecipe)
  $('.updateRecipeDiv').addClass('hide')
  $('.content').removeClass('hide')
  $('.deleteRecipe').on('click', onDeleteRecipe)
  $('.updateRecipeButton').on('click', fillInputs)
}

else {
  $('.content').text('No recipes!')
  setTimeout(function () {
    $('.content').text('')
  }, 1000)
}}

const addHandlers = () => {
  $('.recipeUpdate').on('submit', onUpdateRecipe)
  $('.deleteRecipe').on('click', onDeleteRecipe)
  $('#selectRecipe').on('submit', onSelectRecipe)
  $('.showRecipes').on('submit', onShowRecipes)
  $('#recipe').on('submit', onAddRecipe)
}

module.exports = {
  addHandlers,
  onShowRecipesSignin
}
