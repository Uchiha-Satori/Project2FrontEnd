'use strict'
const app = require('./app.js')
const message = function (msg) {
  $('#error-message').text(msg)
}

const fadeMessage = function (msg) {
  $('#error-message').fadeIn(1000).delay(3000).fadeOut(1000)
}

const signUpSuccess = (data) => {
  console.log(data)
}

const signUpFailure = (error) => {
  message('Sign Up Failure Username taken or incorrect matching password')
  fadeMessage()
  console.log(error)
}

const signInSuccess = (data) => {
  console.log(data)
  app.user = data.user
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#log-out').show()
  $('#blog-history').show()
  $('#submit-blog').show()
  $('#new-blog-title').show()
  $('#new-blog-content').show()
  $('#change-password').show()

  console.log('this is working')
}

const signInFailure = (error) => {
  console.log(error)
  message('Incorrect Password or Username')
  fadeMessage()
}

const changePasswordSuccess = (data) => {
  message('Password Changed')
  fadeMessage()
  console.log(data)
}

const changePasswordFailure = (error) => {
  message('Error, Try Again, Password Not Changed')
  fadeMessage()
  console.log(error)
}

const logoutSuccess = () => {
  app.user = null
  message('Log Out Success')
  fadeMessage()
  $('#log-out').hide()
  $('#blog-history').hide()
  $('#submit-blog').hide()
  $('#new-blog-title').hide()
  $('#new-blog-content').hide()
  $('#change-password').hide()
  $('#show-blogs').hide()
  $('#sign-up').show()
  $('#sign-in').show()
  console.log('it log off')
}

const logoutFailure = (error) => {
  message('Log Out Fail')
  fadeMessage()
  console.log(error)
}

const loopBlogsFail = (error) => {
  console.error(error)
}

const loopBlogsSuccess = function (data) {
  console.log(data)
  const blogs = data.blogs
  $('#show-blogs').show()
  $('#show-blogs').empty()
  blogs.forEach((blog) => {
    $('#show-blogs').append(
      '<div style="width: 80%; background-color: white; color: black; padding: 0 0 23px 0; margin: 10px;">' +
      '<div style="background-color: #bdc3c7; color: black;">' +
      `<h1> ${blog.title} </h1>` +
      '</div>' +
      '<div style= padding 10px;>' +
      `<p> ${blog.content} </p>` +
      `<input type="submit" class="btnDeleteBlog" name="delete" data-id="${blog.id}" value="delete blog">` +
      // outside edit blog button
      `<button type="button" class="btnEditBlog" id="editBtn${blog.id}" data-toggle="modal" data-target="#exampleModal" data-id="${blog.id}">edit blog</button>` +
      '</div>' +
      '</div>'
    )
  })
}

const editBlogSuccess = function (data) {
  console.log(data)
}

const editBlogFail = (error) => {
  console.error(error)
}

const deleteBlogSuccess = function (data) {
  console.log(data)
}

const deleteBlogFail = (error) => {
  console.error(error)
}

module.exports = {
  signUpFailure,
  signUpSuccess,
  signInSuccess,
  signInFailure,
  changePasswordFailure,
  changePasswordSuccess,
  logoutSuccess,
  logoutFailure,
  loopBlogsSuccess,
  loopBlogsFail,
  editBlogSuccess,
  editBlogFail,
  deleteBlogSuccess,
  deleteBlogFail
}
