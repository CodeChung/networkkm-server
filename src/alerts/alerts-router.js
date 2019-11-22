const express = require('express')
const path = require('path')
const AlertsService = require('./alerts-service')
const { requireAuth } = require('../middleware/jwt-auth')

const alertsRouter = express.Router()
const jsonBodyParser = express.json()

alertsRouter
  .route('/pending')
  .all(requireAuth)
  .get(jsonBodyParser, (req, res, next) => {
    AlertsService.checkPending(req.app.get('db'), req.user.id)
        .then(pending => res.status(201).json(pending))
  })

module.exports = alertsRouter