'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
// const ui = require('./auth/ui.js') // may not need

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const blogEvents = require('../scripts/auth/events.js')

$(() => {
  $('#sign-up').on('submit', blogEvents.onSignUp)
  $('#sign-in').on('submit', blogEvents.onSignIn)
  $('#change-password').on('submit', blogEvents.onChangePassword)
  $('#log-out').on('click', blogEvents.onLogOut)
  $('#submit-blog').on('click', blogEvents.onSubmitBlog)
})
