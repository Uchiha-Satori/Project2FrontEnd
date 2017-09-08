const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api.js')
const ui = require('./ui.js')

const onSignUp = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  const data = getFormFields(this)
  console.log(data)
  event.preventDefault()
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onLogOut = function (event) {
  event.preventDefault()
  api.userLogout()
    .then(ui.logoutSuccess)
    .catch(ui.logoutFailure)
}

const onSubmitBlog = function (event) {
  event.preventDefault()
  const title = $('#00').val()
  const content = $('#11').val()
  api.adminBlog(title, content) // update api
    .then(ui.blogSuccess) // update ui with
    .catch(ui.blogFailure)
}

const onBlogHistory = function (event) {
  event.preventDefault()
  api.blogHistory()
    .then(ui.getBlogSuccess)
    .catch(ui.getBlogFail)
}

module.exports = {
  onSignIn,
  onSignUp,
  onChangePassword,
  onLogOut,
  onSubmitBlog,
  onBlogHistory
}
