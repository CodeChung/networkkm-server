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

blogRouter
  .route('/comments/:blogId')
  .all(requireAuth)
  .get((req, res, next) => {
      const { blogId } = req.params 
      blogService.getBlogComments(req.app.get('db'), blogId)
        .then(comments => res.status(201).json(comments))
  })

module.exports = blogRouter