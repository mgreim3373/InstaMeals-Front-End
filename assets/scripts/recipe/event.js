'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const store = require('../store')
const api = require('./api')
const ui = require('./ui')


const onSignUpIn = function (event) {
  delete store.credentials.password_confirmation
  let dataWithoutPC = store.credentials
  api.signIn(dataWithoutPC)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(this)

  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  console.log('yay')
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onAddRecipe = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.addRecipe(data)
    .then(ui.addRecipeSuccess)
    .catch(ui.addRecipeFailure)
}

const addHandlers = () => {
  $('#recipe').on('submit', onAddRecipe)
}

module.exports = {
  addHandlers
}
