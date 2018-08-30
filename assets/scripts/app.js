'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/event.js')
const recipeEvents = require('./recipe/event.js')

$(() => {
  authEvents.addHandlers()
  recipeEvents.addHandlers()
})
