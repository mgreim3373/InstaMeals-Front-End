'use strict'

const store = require('../store')

const signUpFailure = function (error) {
  $('#sign-up input[name="credentials[password]"]').val('Invalid Entry')
  $('#sign-up input[name="credentials[email]"]').val('Invalid Entry')
  $('#sign-up input[name="credentials[password_confirmation]"]').val('Invalid Entry')
  $('#sign-up input[name="credentials[password]"]').css('color','red')
  $('#sign-up input[name="credentials[email]"]').css('color','red')
  $('#sign-up input[name="credentials[password_confirmation]"]').css('color','red')

setTimeout(function() {
  $('#sign-up input[name="credentials[password]"]').val('')
  $('#sign-up input[name="credentials[email]"]').val('')
  $('#sign-up input[name="credentials[password_confirmation]"]').val('')
  $('#sign-in input[name="credentials[password]"]').val('')
  $('#sign-in input[name="credentials[email]"]').val('')
  $('#sign-up input[name="credentials[password]"]').css('color','black')
  $('#sign-up input[name="credentials[email]"]').css('color','black')
  $('#sign-up input[name="credentials[password_confirmation]"]').css('color','black')
}, 1000
)
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
  $('#changePasswordButton').removeClass('hide')
  $('#sign-out').removeClass('hide')
  $('#selectRecipeButton').removeClass('hide')
  $('#showRecipes').removeClass('hide')
  $('#recipeButton').removeClass('hide')
  console.log('success')
}

const signInFailure = function (error) {
  $('#sign-in input[name="credentials[password]"]').val('Invalid Entry')
  $('#sign-in input[name="credentials[email]"]').val('Invalid Entry')
  $('#sign-in input[name="credentials[password]"]').css('color','red')
  $('#sign-in input[name="credentials[email]"]').css('color','red')

setTimeout(function() {
  $('#sign-up input[name="credentials[password]"]').val('')
  $('#sign-up input[name="credentials[email]"]').val('')
  $('#sign-up input[name="credentials[password_confirmation]"]').val('')
  $('#sign-in input[name="credentials[password]"]').val('')
  $('#sign-in input[name="credentials[email]"]').val('')
  $('#sign-in input[name="credentials[password]"]').css('color','black')
  $('#sign-in input[name="credentials[email]"]').css('color','black')
}, 1000
)
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
  $('#changePasswordButton').addClass('hide')
  $('#sign-out').addClass('hide')
  $('.handlebars').addClass('hide')
  $('#selectRecipeButton').addClass('hide')
  $('#showRecipes').addClass('hide')
  $('#recipeButton').addClass('hide')
  console.log('success')
  store.user = null
}

const signOutFailure = function (error) {
  console.log('fail')
}

const changePasswordSuccess = function () {
  $('#change-password input[name="passwords[old]"]').val('')
  $('#change-password input[name="passwords[new]"]').val('')
  $('#passwordChange').modal('toggle')
}

const changePasswordFailure = function (error) {
  $('#change-password input[name="passwords[old]"]').val('')
  $('#change-password input[name="passwords[new]"]').val('')
  $('#change-password input[name="passwords[old]"]').val('Invalid Entry')
  $('#change-password input[name="passwords[new]"]').val('Invalid Entry')
  $('#change-password input[name="passwords[old]"]').css('color', 'red')
  $('#change-password input[name="passwords[new]"]').css('color', 'red')
setTimeout(function() {
  $('#change-password input[name="passwords[old]"]').val('')
  $('#change-password input[name="passwords[old]"]').css('color', 'black')
  $('#change-password input[name="passwords[new]"]').val('')
  $('#change-password input[name="passwords[new]"]').css('color', 'black')
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
