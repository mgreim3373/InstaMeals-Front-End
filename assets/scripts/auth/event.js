'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const store = require('../store')
const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  store.credentials = data
  api.signUp(data)
    .then(onSignUpIn)
    .catch(ui.signUpFailure)
}

const onSignUpIn = function (event) {
  delete store.credentials.password_confirmation
  const dataWithoutPC = store.credentials
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
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const toSignIn = function (event) {
  $('#signInCard').removeClass('hide')
  $('#signUpCard').addClass('hide')
}

const toSignUp = function (event) {
  $('#signInCard').addClass('hide')
  $('#signUpCard').removeClass('hide')
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('click', onSignOut)
  $('#change-password').on('submit', onChangePassword)
  $('#to-login').on('click', toSignIn)
  $('#to-signup').on('click', toSignUp)
}

module.exports = {
  addHandlers
}
