const express = require('express')
const path = require('path')
const BlogService = require('./blog-service')
const { requireAuth } = require('../middleware/jwt-auth')

const blogRouter = express.Router()
const jsonBodyParser = express.json()

blogRouter
  .route('/')
  .all(requireAuth)
  .get((req, res, next) => {
    BlogService.getUserBlog(req.app.get('db'), req.user.id)
      .then(posts => res.status(201).json(posts))
  })
  .post(jsonBodyParser, (req, res, next) => {
    BlogService.postBlog(req.app.get('db'), req.body)
      .then(newBlog => res.status(301).json(newBlog))
  })

blogRouter
  .route('/comments/:blogId')
  .all(requireAuth)
  .get((req, res, next) => {
    const { blogId } = req.params
    BlogService.getBlogComments(req.app.get('db'), blogId)
      .then(comments => res.status(201).json(comments))
  })
  .post(jsonBodyParser, (req, res, next) => {
    const { comment } = req.body
    const { blogId } = req.params
    const newComment = {
      blog_id: blogId,
      user_id: req.user.id,
      comment
    }
    BlogService.postComment(req.app.get('db'), newComment)
      .then(comments => res.status(301).json(comments))
  })

blogRouter
  .route('/user/:id')
  .all(requireAuth)
  .get((req, res, next) => {
    const { id } = req.params
    BlogService.getUserBlog(req.app.get('db'), id)
      .then(posts => res.status(201).json(posts))
  })

module.exports = blogRouter