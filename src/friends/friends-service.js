const xss = require('xss')

const FriendsService = {
  async getFriends(db, id) {
    return db('users')
      .where({ id })
      .first()
      .then(user => user.friends)
  },
  async getUserMetadata(db, id) {
    const user = await db('users').where({ id }).first()
    return {
      id: user.id,
      first_name: user.first_name,
      last_name: user.last_name,
    }
  }
}

module.exports = FriendsService
