const express = require('express')
const path = require('path')
const UsersService = require('./users-service')
const { requireAuth } = require('../middleware/jwt-auth')
const FriendsService = require('../friends/friends-service')
const MessagingService = require('../messaging/messaging-service')

const usersRouter = express.Router()
const jsonBodyParser = express.json()

usersRouter
  .route('/')
  .post(jsonBodyParser, (req, res, next) => {
    const { password, first_name, last_name, email } = req.body

    for (const field of ['first_name', 'last_name', 'password', 'email'])
      if (!req.body[field])
        return res.status(400).json({
          error: `Missing '${field}' in request body`
        })
    const passwordError = UsersService.validatePassword(password)

    if (passwordError)
      return res.status(400).json({ error: passwordError })

    UsersService.hasUserWithEmail(
      req.app.get('db'),
      email
    )
      .then(hasUserWithEmail => {
        if (hasUserWithEmail)
          return res.status(400).json({ error: `Email already registered` })

        return UsersService.hashPassword(password)
          .then(hashedPassword => {
            const newUser = {
              first_name,
              password: hashedPassword,
              last_name,
              email,
              date_created: 'now()',
            }
            return UsersService.insertUser(
              req.app.get('db'),
              newUser
            )
              .then(user => {
                res
                  .status(201)
                  .location(path.posix.join(req.originalUrl, `/${user.id}`))
                  .json(UsersService.serializeUser(user))
              })
          })
      })
      .catch(next)
  })

usersRouter
  .route('/email')
  .all(requireAuth)
  .post(jsonBodyParser, (req, res, next) => {
    const { first_name, last_name, email } = req.body
    UsersService.checkEmail(req.app.get('db'), email)
      .then(async userWithEmail => {
        if (userWithEmail) {
          UsersService.sendFriendRequest(
            req.app.get('db'),
            req.user.id,
            userWithEmail.id
          )
        } else {
          const user = await FriendsService.getUser(req.app.get('db'), req.user.id)
          const message = `
            Hi, <b>${first_name}</b>!

            ${user.first_name} ${user.last_name} has invited you to Network KM.
            Network KM is a network. Please click <a href='http://localhost:3000/invite?from=${user.first_name}+${user.last_name}&to=${first_name}+${last_name}&email=${email}>here</a> to join!
          `
          MessagingService.sendEmail(req.user.email, email, 'Join Me On NetworkKM', message)

          const potentialUser = {
            first_name,
            password: 'Bobert',
            last_name,
            email,
            date_created: 'now()',
          }
          UsersService.insertPotentialUser(req.app.get('db'), potentialUser)
            .then(newUser => UsersService.sendFriendRequest(
              req.app.get('db'),
              req.user.id,
              newUser.id
            ))
        }
      })
  })

usersRouter
  .route('/id/:id')
  .get((req, res, next) => {
    const { id } = req.params
    UsersService.getUser(req.app.get('db'), id)
      .then(user => res.status(201).json(user))
  })

usersRouter
  .route('/requests')
  .all(requireAuth)
  .get((req, res, next) => {
    UsersService.getUserFriendRequests(req.app.get('db'), req.user.id)
      .then(requests => res.status(201).json(requests))
  })

module.exports = usersRouter