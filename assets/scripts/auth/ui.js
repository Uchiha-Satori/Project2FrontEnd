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
  console.log(data)
}

const signUpFailure = (error) => {
  console.log(error)
}

const signInSuccess = (data) => {
  console.log(data)
  app.user = data.user
  $('#sign-up').hide()
  $('#sign-in').hide()

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
  // $('#change-password').hide() //not working yet
  console.log(data)
}

const changePasswordFailure = (error) => {
  message('Error, Try Again, Password Not Changed')
  console.log(error)
}

const logoutSuccess = () => {
  app.user = null
  message('Log Out Success')
  console.log('it log off')
}

const logoutFailure = (error) => {
  message('Log Out Fail')
  console.log(error)
}

const blogSuccess = function (data) {
  console.log(data)
}

const blogFailure = function (data) {
  console.log(data)
}

const getBlogSuccess = function (data) {
  $('#message').html('Blogs posted:' + data.blogs.length)
  console.log(data)
}

const loopBlogFail = (error) => {
  console.error(error)
}

const loopBlogsSuccess = function (data) {
  console.log(data)
  const blogs = data.blogs
  blogs.forEach((blog) => {
    $('#show-blogs').append(
      '<div>' +
      `<h1> ${blog.title} </h1>` +
      `<p> ${blog.content} </p>` +
      '</div>'
    )
  })

  // for (let i = 0; i < data.blogs.length; i++) {
  //   $('#show-blogs').append(
  //     '<div>' +
  //     '<h2>' + data.blogs[i].blog[title] + '</h2>' +
  //     '<p>' + data.blogs[i].blog[content] + '</p>' +
  //     '<p hidden>' + data.blogs[i].id + '</p>' +
  //     '<button class="delete-blog" id="' + data.blogs[i].id + '" type="button"
  //     class="btn">Delete Blog</button>'+
  //     '</div>'
  //   )
  // }
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
  blogSuccess,
  blogFailure,
  loopBlogsSuccess,
  loopBlogFail,
  editBlogSuccess,
  editBlogFail,
  deleteBlogSuccess,
  deleteBlogFail
  // adminSuccess
}
