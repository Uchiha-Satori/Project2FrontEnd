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
  const title = $('#new-blog-title').val()
  const content = $('#new-blog-content').val()
  api.adminBlog(title, content) // update api
    .then(ui.createSuccess) // update ui with
    .catch(ui.loopBlogsFailure)
}

const onBlogHistory = function (event) {
  event.preventDefault()
  api.blogHistory()
    .then(ui.loopBlogsSuccess)
    .catch(ui.loopBlogsFail)
}

const onBlogEdit = function (event) {
  console.log(event.target.dataset.id)
  event.preventDefault()
  const eventNum = event.target.dataset.id
  const blogId = parseInt(eventNum)
  const title = $('#blog-title').val()
  const content = $('#content-text').val()
  api.updateBlog(blogId, title, content)
    .then(ui.editBlogSuccess)
    .catch(ui.editBlogFail)
}

const onBlogDelete = function (event) {
  console.log(event)
  event.preventDefault()
  api.deleteBlog(event.target.dataset.id)
    .then(ui.deleteBlogSuccess)
    .catch(ui.deleteBlogFail)
}

module.exports = {
  onSignIn,
  onSignUp,
  onChangePassword,
  onLogOut,
  onSubmitBlog,
  onBlogHistory,
  onBlogEdit,
  onBlogDelete
}
