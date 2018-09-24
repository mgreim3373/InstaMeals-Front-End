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
  showLoginPage()
  store.user = null
}

const signOutFailure = function () {
}

const changePasswordSuccess = function () {
  $('#change-password input').val('Change Password Success')
  $('#change-password input').css('color', 'green')
  setTimeout(function () {
    $('#change-password input').css('color', 'black')
    $('#passwordChange').modal('hide')
    $('#change-password input').val('')
    closeModalBackground()
  }, 1000
  )
}

const changePasswordFailure = function () {
  $('#change-password input').val('Input Error')
  $('#change-password input').css('color', 'red')
  setTimeout(function () {
    $('#change-password input').val('')
    $('#change-password input').css('color', 'black')
  }, 1000
  )
}

const hideLoginPage = function () {
  $('.auth-container').addClass('hide')
  $('#dropDownButton').removeClass('hide')
  $('.content').removeClass('hide')
  $('#selectRecipe').removeClass('hide')
}

const showLoginPage = function () {
  $('.auth-container').removeClass('hide')
  $('#dropDownButton').addClass('hide')
  $('.content').addClass('hide')
  $('#selectRecipe').addClass('hide')
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

const closeModalBackground = function () {
  $('body').removeClass('modal-open')
  $('.modal-backdrop').remove()
  $('#recipeUpdateModal').modal('hide')
  $('#selectRecipeModal').modal('hide')
}

module.exports = {
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure,
  closeModalBackground
}
