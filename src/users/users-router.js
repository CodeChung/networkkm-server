const express = require('express')
const path = require('path')
const UsersService = require('./users-service')
const requireAuth = require('../middleware/jwt-auth')
const FriendsService = require('../friends/friends-service')

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

module.exports = usersRouter