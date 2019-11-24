const express = require('express')
const path = require('path')
const blogService = require('./blog-service')
const { requireAuth } = require('../middleware/jwt-auth')

const blogRouter = express.Router()
const jsonBodyParser = express.json()

blogRouter
  .route('/')
  .all(requireAuth)
  .get((req, res, next) => {
    blogService.getUserBlog(req.app.get('db'), req.user.id)
        .then(posts => res.status(201).json(posts))
  })

module.exports = blogRouter