'use strict'

const store = require('../store')

const signUpFailure = function (error) {
  $('#sign-up input[name="credentials[password]"]').val('')
  $('#sign-up input[name="credentials[email]"]').val('')
  $('#sign-up input[name="credentials[password_confirmation]"]').val('')
  $('#sign-in input[name="credentials[password]"]').val('')
  $('#sign-in input[name="credentials[email]"]').val('')
  console.log('fail')
}

const signInSuccess = function (data) {
  store.user = data.user
  $('#sign-up input[name="credentials[password]"]').val('')
  $('#sign-up input[name="credentials[email]"]').val('')
  $('#sign-up input[name="credentials[password_confirmation]"]').val('')
  $('#sign-in input[name="credentials[password]"]').val('')
  $('#sign-in input[name="credentials[email]"]').val('')
  $('#search').removeClass('hide')
  $('#sign-up').addClass('hide')
  $('#sign-in').addClass('hide')
  $('#change-password').removeClass('hide')
  $('#sign-out').removeClass('hide')
  console.log('success')
}

const signInFailure = function (error) {
  $('#sign-up input[name="credentials[password]"]').val('')
  $('#sign-up input[name="credentials[email]"]').val('')
  $('#sign-up input[name="credentials[password_confirmation]"]').val('')
  $('#sign-in input[name="credentials[password]"]').val('')
  $('#sign-in input[name="credentials[email]"]').val('')
  console.log('fail')
}

const signOutSuccess = function () {
  $('#sign-in input[name="credentials[password]"]').val('')
  $('#sign-in input[name="credentials[email]"]').val('')
  $('#sign-up input[name="credentials[password]"]').val('')
  $('#sign-up input[name="credentials[email]"]').val('')
  $('#sign-up input[name="credentials[password_confirmation]"]').val('')
  $('#search').addClass('hide')
  $('#sign-up').removeClass('hide')
  $('#sign-in').removeClass('hide')
  $('#change-password').addClass('hide')
  $('#sign-out').addClass('hide')
  $('.handlebars').addClass('hide')
  console.log('success')
  store.user = null
}

const signOutFailure = function (error) {
  console.log('fail')
}

const changePasswordSuccess = function () {
  $('#change-password input[name="passwords[old]"]').val('')
  $('#change-password input[name="passwords[new]"]').val('')
  console.log('success')
}

const changePasswordFailure = function (error) {
  $('#change-password input[name="passwords[old]"]').val('')
  $('#change-password input[name="passwords[new]"]').val('')
  console.log('fail')
}

module.exports = {
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
