'use strict'

const RecipesTemplate = require('../templates/recipes.handlebars')
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
    .then(ui.selectRecipeSuccess)
  //  .catch(ui.selectRecipeFailure)
}

const onShowRecipes = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.showRecipes(data)
    .then(showRecipeSuccess)
  //  .catch(ui.selectRecipeFailure)
}

const showRecipeSuccess = function (data) {
  const showRecipeHtml = RecipesTemplate({ recipes: data.recipes })
  $('.content').html(showRecipeHtml)
  $('.deleteRecipe').on('submit', onDeleteRecipe)
}

const addHandlers = () => {
  $('#recipeUpdate').on('submit', onUpdateRecipe)
  $('#recipe').on('submit', onAddRecipe)
  $('.deleteRecipe').on('submit', onDeleteRecipe)
  $('#selectRecipe').on('submit', onSelectRecipe)
  $('#showRecipes').on('submit', onShowRecipes)
}

module.exports = {
  addHandlers
}
