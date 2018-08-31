'use strict'

const config = require('../config')
const store = require('../store')


const addRecipe = function (data) {
  return $.ajax({
    url: config.apiUrl + '/recipes',
    method: 'POST',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
      data: {
        recipe: {
          name: data.name,
          prep_time: data.prep_time,
          cook_time: data.cook_time,
          serving_size: data.serving_size,
          pot_mode: data.pot_mode,
          pot_pressure: data.pot_pressure,
          ingredient: data.ingredient,
          prep_instruction: data.prep_instruction
        }
    }})
}

const updateRecipe = function (data) {
  return $.ajax({
    url: config.apiUrl + '/recipes/' + store.id,
    method: 'PATCH',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
      data: {
        recipe: {
          name: data.name,
          prep_time: data.prep_time,
          cook_time: data.cook_time,
          serving_size: data.serving_size,
          pot_mode: data.pot_mode,
          pot_pressure: data.pot_pressure,
          ingredient: data.ingredient,
          prep_instruction: data.prep_instruction
        }
    }})
}

const deleteRecipe = function () {
  return $.ajax({
    url: config.apiUrl + '/recipes/' + store.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const selectRecipe = function () {
  return $.ajax({
    url: config.apiUrl + '/recipes/' + store.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const showRecipes = function () {
  return $.ajax({
    url: config.apiUrl + '/recipes',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  addRecipe,
  updateRecipe,
  deleteRecipe,
  selectRecipe,
  showRecipes
}
