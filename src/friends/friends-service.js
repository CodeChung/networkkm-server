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
  findUser(db, name) {
    return db('users')
      .where('first_name', 'like', `%${name}%`)
      .orWhere('last_name', 'like', `%${name}%`)
  },
  async objectifyPeople(db, ids) {
    let people = []

    for (let i = 0; i < ids.length; i++) {
      const person = await FriendsService.getUser(db, ids[i])
      people.push(person)
    }

    return people
  },
}

module.exports = FriendsService
