const xss = require('xss')

const FriendsService = {
  getFriends(db, id) {
    return db('users')
      .where({ id })
      .first()
      .then(user => user.friends)
  },
  async acceptRequest(db, userId, friendId) {
    console.log('user', userId, 'friend', friendId)
    // We update both users' friend lists then delete alert
    let userFriends = await this.getFriends(db, userId)
    let friendsList = await this.getFriends(db, friendId)

    userFriends = [...userFriends, friendId]
    friendsList = [...friendsList, userId]

    db('alerts')
      .where({
        'sender': friendId,
        'receiver': userId,
        'type': 'request'
      })
      .del()
      .then(res => res)

    db('users')
      .where('id', userId)
      .update('friends', userFriends)
      .then(res => res)

    db('users')
      .where('id', friendId)
      .update('friends', friendsList)
      .then(res => res)

    console.log('sender', friendId, friendsList, 'receiver', userId, userFriends)

    return friendId
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
