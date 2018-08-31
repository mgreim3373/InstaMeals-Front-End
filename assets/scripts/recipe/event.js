'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const store = require('../store')
const api = require('./api')
const ui = require('./ui')

const onUpdateRecipe = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  store.id = data.id
  api.updateRecipe(data)
    .then(ui.updateRecipe)
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
  console.log(data.id)
  store.id = data.id
  api.selectRecipe(data)
    .then(ui.selectRecipeSuccess)
  //  .catch(ui.selectRecipeFailure)
}

const addHandlers = () => {
  $('#recipeUpdate').on('submit', onUpdateRecipe)
  $('#recipe').on('submit', onAddRecipe)
  $('#deleteRecipe').on('submit', onDeleteRecipe)
  $('#selectRecipe').on('submit', onSelectRecipe)
}

module.exports = {
  addHandlers
}
