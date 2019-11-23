const express = require('express')
const MessagingService = require('./messaging-service')
const { requireAuth } = require('../middleware/jwt-auth')

const messagingRouter = express.Router()
const jsonBodyParser = express.json()

messagingRouter
  .route('/')
  .get(requireAuth, (req,res,next) => {
    MessagingService.sendEmail()
  })


module.exports = messagingRouter
