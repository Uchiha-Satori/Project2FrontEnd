'use strict'
const app = require('./app.js')

const signUp = (data) => {
  return $.ajax({
    url: app.host + 'sign-up/',
    method: 'POST',
    data: {
      'credentials': {
        'email': data.credentials.email,
        'password': data.credentials.password,
        'password_confirmation': data.credentials.password
      }
    }
  })
}

const signIn = (data) => {
  return $.ajax({
    url: app.host + 'sign-in/',
    method: 'POST',
    data: {
      'credentials': {
        'email': data.credentials.email,
        'password': data.credentials.password
      }
    }
  })
}

const changePassword = (data) => {
  return $.ajax({
    url: app.host + 'change-password/' + app.user.id,
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    method: 'PATCH',
    data
  })
}

const userLogout = () => {
  return $.ajax({
    url: app.host + 'sign-out/' + app.user.id,
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    method: 'DELETE'
  })
}

const adminBlog = (title, content) => {
  return $.ajax({
    url: app.host + 'blogs/',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    method: 'POST',
    data: {
      'blog': {
        'title': title,
        'content': content,
        'user_id': app.user.id
      }
    }
  })
}

const blogHistory = () => {
  return $.ajax({
    url: app.host + 'blogs/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const updateBlog = (id, title, content) => {
  return $.ajax({
    url: app.host + 'blogs/' + id,
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    method: 'PATCH',
    data: {
      'blog': {
        'title': title,
        'content': content,
        'user_id': app.user.id
      }
    }
  })
}

const deleteBlog = (id) => {
  console.log(id)
  return $.ajax({
    url: app.host + 'blogs/' + id,
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    method: 'DELETE'
  })
}

// make button, and everything else just like admin blog.
module.exports = {
  signIn,
  signUp,
  changePassword,
  userLogout,
  adminBlog,
  blogHistory,
  updateBlog,
  deleteBlog
}
