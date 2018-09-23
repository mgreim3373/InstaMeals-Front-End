'use strict'

const store = require('../store')
const recipeEvent = require('../recipe/event')

const signUpFailure = function () {
  errorMessageClearForm()
}

const signInSuccess = function (data) {
  store.user = data.user
  $('#sign-up input').val('')
  $('#sign-in input').val('')
  recipeEvent.onShowRecipesSignin()
  hideLoginPage()
}

const signInFailure = function () {
  errorMessageClearForm()
}

const signOutSuccess = function () {
  $('.auth-container').removeClass('hide')
  $('#dropDownButton').addClass('hide')
  $('.content').addClass('hide')
  store.user = null
}

const signOutFailure = function () {
}

const changePasswordSuccess = function () {
  $('#change-password input[name="passwords[old]"]').val('')
  $('#change-password input[name="passwords[new]"]').val('')
  $('#change-password input[name="passwords[old]"]').val('Password Updated')
  $('#change-password input[name="passwords[new]"]').val('Password Updated')
  $('#change-password input[name="passwords[old]"]').css('color', 'green')
  $('#change-password input[name="passwords[new]"]').css('color', 'green')
  setTimeout(function () {
    $('#change-password input[name="passwords[old]"]').val('')
    $('#change-password input[name="passwords[old]"]').css('color', 'black')
    $('#change-password input[name="passwords[new]"]').val('')
    $('#change-password input[name="passwords[new]"]').css('color', 'black')
    $('#passwordChange').modal('hide')
    $('body').removeClass('modal-open')
    $('.modal-backdrop').remove()
  }, 1000
  )
}

const changePasswordFailure = function () {
  $('#change-password input[name="passwords[old]"]').val('')
  $('#change-password input[name="passwords[new]"]').val('')
  $('#change-password input[name="passwords[old]"]').val('Invalid Entry')
  $('#change-password input[name="passwords[new]"]').val('Invalid Entry')
  $('#change-password input[name="passwords[old]"]').css('color', 'red')
  $('#change-password input[name="passwords[new]"]').css('color', 'red')
  setTimeout(function () {
    $('#change-password input[name="passwords[old]"]').val('')
    $('#change-password input[name="passwords[old]"]').css('color', 'black')
    $('#change-password input[name="passwords[new]"]').val('')
    $('#change-password input[name="passwords[new]"]').css('color', 'black')
  }, 1000
  )
}

const hideLoginPage = function () {
  $('.auth-container').addClass('hide')
  $('#dropDownButton').removeClass('hide')
  $('.content').removeClass('hide')
}

const errorMessageClearForm = function () {
  $('#sign-in input').val('Invalid Entry')
  $('#sign-in input').css('color', 'red')
  $('#sign-up input').val('Invalid Entry')
  $('#sign-up input').css('color', 'red')
  setTimeout(function () {
    $('#sign-up input').val('')
    $('#sign-up input').css('color', 'black')
    $('#sign-in input').val('')
    $('#sign-in input').css('color', 'black')
  }, 1000
  )
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
