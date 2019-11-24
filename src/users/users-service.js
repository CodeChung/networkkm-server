const xss = require('xss')
const bcrypt = require('bcryptjs')

const REGEX_UPPER_LOWER_NUMBER_SPECIAL = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&])[\S]+/

const UsersService = {
  checkEmail(db, email) {
    return db('users')
      .where({ email })
      .first()
  },
  hasUserWithEmail(db, email) {
    return db('users')
      .where({ email })
      .first()
      .then(user => !!user)
  },
  insertUser(db, newUser) {
    return db
      .insert(newUser)
      .into('users')
      .returning('*')
      .then(([user]) => user)
  },
  getUser(db, userId) {
    return db('users')
      .where('id', userId)
      .first()
  },
  getUserFriendRequests(db, userId) {
    return db('alerts')
      .where('receiver', userId)
      .where('type', 'request')
      .then(async alerts => {
        let requests = []

        for (let i = 0; i < alerts.length; i++) {
          let friendRequest = await this.getUser(db, alerts[i].sender)
          requests.push(friendRequest)
        }

        return requests
      })
  },
  insertPotentialUser(db, newUser) {
    // might want to create a separate table for potential email adds.
    return db
    .insert(newUser)
    .into('users')
    .returning('*')
    .then(([user]) => user)
  },
  validatePassword(password) {
    if (password.length < 8) {
      return 'Password must be longer than 8 characters'
    }
    if (password.length > 72) {
      return 'Password must be less than 72 characters'
    }
    if (password.startsWith(' ') || password.endsWith(' ')) {
      return 'Password must not start or end with empty spaces'
    }
    return null
  },
  hashPassword(password) {
    return bcrypt.hash(password, 12)
  },
  serializeUser(user) {
    return {
      id: user.id,
      first_name: xss(user.first_name),
      last_name: xss(user.last_name),
      email: xss(user.email),
      password: xss(user.password),
      date_created: new Date(user.date_created),
    }
  },
  sendFriendRequest(db, sender, receiver) {
    if (sender !== receiver) {
      const newAlert = {
        sender: parseInt(sender),
        receiver: parseInt(receiver),
        type: 'request',
        data: null
      }
      return db
        .insert(newAlert)
        .into('alerts')
        .returning('*')
        .then(([alert]) => alert)
    }
  }
}

module.exports = UsersService