'use strict'

const store = require('../store')
const recipeEvent = require('../recipe/event')
const recipeUI = require('../recipe/ui')

const signInSuccess = function (data) {
  store.user = data.user
  $('#sign-up input').val('')
  $('#sign-in input').val('')
  recipeEvent.onShowRecipesSignin()
  hideLoginPage()
}

const signInFailure = function () {
  clearForm()
  recipeUI.showErrorMessage()
}

const signUpFailure = function () {
  clearForm()
  recipeUI.showErrorMessage()
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
  $('#change-password input').val('')
  recipeUI.showErrorMessage()
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

const clearForm = function () {
  $('#sign-up input').val('')
  $('#sign-in input').val('')
}

const closeModalBackground = function () {
  $('#recipeUpdateModal').modal('hide')
  $('#selectRecipeModal').modal('hide')
  $('body').removeClass('modal-open')
  $('.modal-backdrop').remove()
}

module.exports = {
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure,
  closeModalBackground,
  clearForm
}
