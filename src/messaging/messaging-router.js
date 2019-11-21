const express = require('express')
const path = require('path')
const messagingService = require('./messaging-service')
const { requireAuth } = require('../middleware/jwt-auth')

const messagingRouter = express.Router()
const jsonBodyParser = express.json()

messagingRouter
  .route('/')
  .get(requireAuth, (req,res,next) => {
    messagingService.getmessaging(req.app.get('db'), req.user.id)
      .then(async friendIds => {
        let community = []
        let world = []
        for (let i = 0; i < friendIds.length; i++) {
          const acquaintances = await messagingService.getmessaging(
            req.app.get('db'),
            friendIds[i]
          )
          acquaintances.forEach(id => community.push(id))
        }
        for (let i = 0; i < community.length; i++) {
          const connections = await messagingService.getmessaging(
            req.app.get('db'),
            community[i]
          )
          connections.forEach(id => world.push(id))
        }

        let realmessaging = []
        let messaging = [...new Set(friendIds)]

        for (let i = 0; i < messaging.length; i++) {
          const friendObject = await messagingService.getUser(req.app.get('db'), messaging[i])
          realmessaging.push(friendObject)
        }
        const network = {
          messaging: await messagingService.objectifyPeople(req.app.get('db'), [...new Set(friendIds)]),
          community: await messagingService.objectifyPeople(req.app.get('db'), [...new Set(community)]),
          world: await messagingService.objectifyPeople(req.app.get('db'), [...new Set(world)]),
        }
        res.json(network)
      })
  })


module.exports = messagingRouter
