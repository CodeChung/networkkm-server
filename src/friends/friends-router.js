const express = require('express')
const path = require('path')
const FriendsService = require('./friends-service')
const { requireAuth } = require('../middleware/jwt-auth')

const friendsRouter = express.Router()
const jsonBodyParser = express.json()

friendsRouter
  .route('/')
  .get(requireAuth, (req,res,next) => {
    FriendsService.getFriends(req.app.get('db'), req.user.id)
      .then(async friendIds => {
        console.log('friends', friendIds)
        let community = []
        let world = []
        for (let i = 0; i < friendIds.length; i++) {
          const acquaintances = await FriendsService.getFriends(
            req.app.get('db'),
            friendIds[i]
          )
          acquaintances.forEach(id => community.push(id))
        }
        console.log('community', community)
        for (let i = 0; i < community.length; i++) {
          const connections = await FriendsService.getFriends(
            req.app.get('db'),
            community[i]
          )
          connections.forEach(id => world.push(id))
        }
        console.log('world', world)
        res.send('hi')
      })
  })

module.exports = friendsRouter
