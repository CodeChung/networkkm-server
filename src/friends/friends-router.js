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
        for (let i = 0; i < community.length; i++) {
          const connections = await FriendsService.getFriends(
            req.app.get('db'),
            community[i]
          )
          connections.forEach(id => world.push(id))
        }

        let realFriends = []
        let friends = [...new Set(friendIds)]

        for (let i = 0; i < friends.length; i++) {
          const friendObject = await FriendsService.getUser(req.app.get('db'), friends[i])
          realFriends.push(friendObject)
        }
        const network = {
          friends: await FriendsService.objectifyPeople(req.app.get('db'), [...new Set(friendIds)]),
          community: await FriendsService.objectifyPeople(req.app.get('db'), [...new Set(community)]),
          world: await FriendsService.objectifyPeople(req.app.get('db'), [...new Set(world)]),
        }
        console.log(network)
        res.json(network)
      })
  })

friendsRouter
  .route('/identify')
  .all(requireAuth)
  .get((req, res, next) => {
    FriendsService.getUser(req.app.get('db'), req.user.id)
      .then(user => res.status(201).json(user))
  })

friendsRouter
  .route('/identify/:id')
  .all(requireAuth)
  .get((req, res, next) => {
    const { id } = req.params

    console.log(id)
    FriendsService.getUser(req.app.get('db'), id)
      .then(user => res.status(201).json(user))
  })

module.exports = friendsRouter
