const xss = require('xss')

const FriendsService = {
  getFriends(db, id) {
    return db('users')
      .where({ id })
      .first()
      .then(user => user.friends)
  },
  getUser(db, id) {
    return db('users')
      .where({ id })
      .first()
      .then(user => ({
        id: user.id,
        first_name: user.first_name,
        last_name: user.last_name,
      }))
  },
  removeDuplicateIds(ids) {

  },
}

module.exports = FriendsService
