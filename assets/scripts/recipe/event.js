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
  store.id = data.id
  api.selectRecipe()
    .then(selectRecipeSuccess)
    .catch(ui.selectRecipeFailure)
}

const onUpdateRecipe = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  store.id = data.id
  api.updateRecipe(data)
    .then(updateRecipeSuccess)
    .catch(ui.updateRecipeFailure)
}

const updateRecipeSuccess = function (data) {
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
  $('#recipeUpdateModal').modal('hide')
  api.selectRecipe()
    .then(selectUpdateRecipeSuccess)
}

const selectUpdateRecipeSuccess = function(data){
  $('.updateRecipeDiv').removeClass('hide')
  $('#selectRecipe input[name="id"]').val('')
  const selectRecipeUpdateHtml = RecipeTemplate({ recipe: data.recipe })
  $('.updateRecipeDiv').html(selectRecipeUpdateHtml)
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
  $('#selectRecipeModal').modal('toggle')
  $('.updateRecipeDiv').addClass('hide')
}

const selectRecipeSuccessNoModal = function (data) {
  $('#selectRecipe input[name="id"]').val('')
  const selectRecipeHtml = RecipeTemplate({ recipe: data.recipe })
  $('.content').html(selectRecipeHtml)
  $('.deleteRecipe').on('submit', onDeleteRecipe)
  $('.recipeUpdate').on('submit', onUpdateRecipe)
  $('.selectRecipe input[name="id"]').val('')
  $('.handlebars').removeClass('hide')
  $('.updateRecipeDiv').addClass('hide')
}

const onAddRecipe = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.addRecipe(data)
    .then(addRecipeSuccess)
    .catch(ui.addRecipeFailure)
}

const addRecipeSuccess = function (data) {
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
  $('#sign').modal('toggle')
  store.id = data.recipe.id
  api.selectRecipe()
  .then(selectRecipeSuccessNoModal)
  .catch(ui.selectRecipeFailure)
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

const onShowRecipes = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.showRecipes(data)
    .then(showRecipeSuccess)
    .catch(ui.selectRecipeFailure)
}

const showRecipeSuccess = function (data) {
  const showRecipesHtml = RecipesTemplate({ recipes: data.recipes })
  $('.content').html(showRecipesHtml)
  $('.deleteRecipe').on('submit', onDeleteRecipe)
  $('.recipeUpdate').on('submit', onUpdateRecipe)
  $('.handlebars').removeClass('hide')
  $('.updateRecipeDiv').addClass('hide')
}

const addHandlers = () => {
  $('.recipeUpdate').on('submit', onUpdateRecipe)
  $('.deleteRecipe').on('submit', onDeleteRecipe)
  $('#selectRecipe').on('submit', onSelectRecipe)
  $('#showRecipes').on('submit', onShowRecipes)
  $('#recipe').on('submit', onAddRecipe)
}

module.exports = {
  addHandlers
}
