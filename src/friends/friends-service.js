const xss = require('xss')

const FriendsService = {
  getFriends(db, id) {
    return db('users')
      .where({ id })
      .first()
      .then(user => user.friends)
  },
  getUserMetadata(db, id) {
    const user = db('users').where({ id }).first()
    return {
      id: user.id,
      first_name: user.first_name,
      last_name: user.last_name,
    }
  },
  removeDuplicateIds(ids) {

  },
}

module.exports = FriendsService
