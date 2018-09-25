'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const store = require('../store')
const api = require('./api')
const ui = require('./ui')

const addHandlebarClickFunctions = function () {
  $('.deleteRecipe').on('click', onDeleteRecipe)
  $('.showRecipes').on('click', onShowRecipes)
  $('.recipeSelectArea').on('click', onClickSelectRecipe)
  $('.updateRecipeButton').on('click', fillInputs)
}

const onSelectRecipe = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  $('#selectRecipe input[name="id"]').val('')
  if (data.id !== '') {
    store.id = data.id
    api.selectRecipe()
      .then(ui.selectRecipeSuccess)
      .then(addHandlebarClickFunctions)
      .catch(ui.selectRecipeFailure)
  } else {
    ui.selectRecipeFailure()
  }
}

const onClickSelectRecipe = function (event) {
  store.id = $(event.target).closest('section').data('id')
  api.selectRecipe()
    .then(ui.selectRecipeSuccess)
    .then(addHandlebarClickFunctions)
    .catch(ui.selectRecipeFailure)
}

const onUpdateRecipe = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.updateRecipe(data)
    .then(ui.updateRecipeSuccess)
    .then(api.selectRecipe)
    .then(ui.selectRecipeSuccess)
    .then(addHandlebarClickFunctions)
    .catch(ui.updateRecipeFailure)
}

const onAddRecipe = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.addRecipe(data)
    .then(ui.addRecipeSuccess)
    .then(api.selectRecipe)
    .then(ui.selectRecipeSuccess)
    .then(addHandlebarClickFunctions)
    .catch(ui.updateRecipeFailure)
}

const onDeleteRecipe = function (event) {
  event.preventDefault()
  const deleteId = $(event.target).closest('div').data('id')
  store.id = deleteId
  api.deleteRecipe()
    .then(api.showRecipes)
    .then(ui.showRecipeSuccess)
    .then(addHandlebarClickFunctions)
    .catch(ui.deleteRecipeFailure)
}

const onShowRecipes = function (event) {
  event.preventDefault()
  api.showRecipes()
    .then(ui.showRecipeSuccess)
    .then(addHandlebarClickFunctions)
    .catch(ui.selectRecipeFailure)
}

const onShowRecipesSignin = function (event) {
  api.showRecipes()
    .then(ui.showRecipeSuccess)
    .then(addHandlebarClickFunctions)
    .catch(ui.selectRecipeFailure)
}

const fillInputs = function (event) {
  const recipeId = $(event.target).closest('div').data('id')
  store.id = recipeId
  const recipeName = $(event.target).closest('div').data('name')
  const recipePrepTime = $(event.target).closest('div').data('prep_time')
  const recipeCookTime = $(event.target).closest('div').data('cook_time')
  const recipeServingSize = $(event.target).closest('div').data('serving_size')
  const recipePotmode = $(event.target).closest('div').data('pot_mode')
  const recipePotPressure = $(event.target).closest('div').data('pot_pressure')
  const recipeIngredients = $(event.target).closest('div').data('ingredient')
  const recipePrep = $(event.target).closest('div').data('prep_instruction')
  const recipePhoto = $(event.target).closest('div').data('photo')

  $('.recipeUpdate input[name="id"]').val(recipeId)
  $('.recipeUpdate input[name="name"]').val(recipeName)
  $('.recipeUpdate input[name="prep_time"]').val(recipePrepTime)
  $('.recipeUpdate input[name="cook_time"]').val(recipeCookTime)
  $('.recipeUpdate input[name="serving_size"]').val(recipeServingSize)
  $('.recipeUpdate input[name="pot_mode"]').val(recipePotmode)
  $('.recipeUpdate input[name="pot_pressure"]').val(recipePotPressure)
  $('.recipeUpdate textarea[name="ingredient"]').val(recipeIngredients)
  $('.recipeUpdate textarea[name="prep_instruction"]').val(recipePrep)
  $('.recipeUpdate input[name="photo"]').val(recipePhoto)
}

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
