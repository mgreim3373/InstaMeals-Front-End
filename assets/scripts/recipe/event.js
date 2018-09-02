'use strict'

const RecipesTemplate = require('../templates/recipes.handlebars')
const RecipeTemplate = require('../templates/recipe.handlebars')
const getFormFields = require(`../../../lib/get-form-fields`)
const store = require('../store')
const api = require('./api')
const ui = require('./ui')

const onUpdateRecipe = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  store.id = data.id
  api.updateRecipe(data)
    .then(ui.updateRecipeSuccess)
    .catch(ui.updateRecipeFailure)
}

const onAddRecipe = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.addRecipe(data)
    .then(ui.addRecipeSuccess)
    .catch(ui.addRecipeFailure)
}

const onDeleteRecipe = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  console.log(data.id)
  store.id = data.id
  api.deleteRecipe(data)
    .then(ui.deleteRecipeSuccess)
    .catch(ui.deleteRecipeFailure)
}

const onSelectRecipe = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  store.id = data.id
  api.selectRecipe(data)
    .then(selectRecipeSuccess)
    .catch(ui.selectRecipeFailure)
}

const selectRecipeSuccess = function (data) {
  console.log(data)
  $('#selectRecipe input[name="id"]').val('')
  const selectRecipeHtml = RecipeTemplate({ recipe: data.recipe })
  $('.content').html(selectRecipeHtml)
  $('.deleteRecipe').on('submit', onDeleteRecipe)
  $('.recipeUpdate').on('submit', onUpdateRecipe)
  $('.selectRecipe input[name="id"]').val('')
  $('.handlebars').removeClass('hide')
}

const onShowRecipes = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.showRecipes(data)
    .then(showRecipeSuccess)
    .catch(ui.selectRecipeFailure)
}

const showRecipeSuccess = function (data) {
  console.log(data)
  const showRecipesHtml = RecipesTemplate({ recipes: data.recipes })
  $('.content').html(showRecipesHtml)
  $('.deleteRecipe').on('submit', onDeleteRecipe)
  $('.recipeUpdate').on('submit', onUpdateRecipe)
  $('.handlebars').removeClass('hide')
}

const addHandlers = () => {
  $('.recipeUpdate').on('submit', onUpdateRecipe)
  $('#recipe').on('submit', onAddRecipe)
  $('.deleteRecipe').on('submit', onDeleteRecipe)
  $('#selectRecipe').on('submit', onSelectRecipe)
  $('#showRecipes').on('submit', onShowRecipes)
}

module.exports = {
  addHandlers
}
