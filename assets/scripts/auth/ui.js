'use strict'
const app = require('./app.js')
const api = require('./api.js')
// maybe use to show message????
const message = function (msg) {
  $('#message').text(msg)
}

// // make this into a way to display ability to post blogs for admin
// const adminSuccess = (data) => {
//   $('').show()
//   app.user = data.user
//   // api.somethingHere()
//     .then
//     .catch
//   console.log('something went wrong')
// }

const signUpSuccess = (data) => {
  message('Sign Up Success')
  console.log(data)
}

const signUpFailure = (error) => {
  message('Sign Up Failure Username taken or incorrect matching password')
  console.log(error)
}

const signInSuccess = (data) => {
  console.log(data)
  message('Sign In Success, Click NEW GAME')
  app.user = data.user
  // api.somethingHere()
  //   .then($('').show()) // gameSuccess used to be in here.
  //   .catch(function () {
    // })
  // console.log(app.user.id) this shows user#

  console.log('this is working')
}

const signInFailure = (error) => {
  console.log(error)
  message('Incorrect Password or Username')
}

const changePasswordSuccess = (data) => {
  message('Password Changed')
  console.log(data)
}

const changePasswordFailure = (error) => {
  message('Error, Try Again, Password Not Changed')
  console.log(error)
}

const logoutSuccess = () => {
  app.user = null
  message('Log Out Success')
  console.log('it log off') // not working yet
}

const logoutFailure = (error) => {
  message('Log Out Fail')
  console.log(error)
}

module.exports = {
  signUpFailure,
  signUpSuccess,
  signInSuccess,
  signInFailure,
  changePasswordFailure,
  changePasswordSuccess,
  logoutSuccess,
  logoutFailure
  // adminSuccess
}
