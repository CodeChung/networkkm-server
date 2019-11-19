const express = require('express')
const path = require('path')
const FriendsService = require('./friends-service')
const { requireAuth } = require('../middleware/jwt-auth')

const friendsRouter = express.Router()
const jsonBodyParser = express.json()

friendsRouter
  .route('/')
  .get(requireAuth, async (req, res, next) => {
    const userId = req.user.id
    const friends = await FriendsService.getFriends(
      req.app.get('db'),
      userId
    )
    console.log(friends)
  })

module.exports = friendsRouter
