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
        console.log('friends', new Set (friendIds))
        let community = []
        let world = []
        for (let i = 0; i < friendIds.length; i++) {
          const acquaintances = await FriendsService.getFriends(
            req.app.get('db'),
            friendIds[i]
          )
          acquaintances.forEach(id => community.push(id))
        }
        console.log('community', new Set (community))
        for (let i = 0; i < community.length; i++) {
          const connections = await FriendsService.getFriends(
            req.app.get('db'),
            community[i]
          )
          connections.forEach(id => world.push(id))
        }
        console.log('world', new Set(world))

        FriendsService.getUser(req.app.get('db'), 2)
          .then(user => console.log('user', user))

        let realFriends = []
        let friends = [...new Set(friendIds)]

        for (let i = 0; i < friends.length; i++) {
          const friendObject = await FriendsService.getUser(req.app.get('db'), friends[i])
          realFriends.push(friendObject)
        }
        console.log('friends', realFriends)
        res.send('hi')
      })
  })

module.exports = friendsRouter
