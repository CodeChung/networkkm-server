const xss = require('xss')
const bcrypt = require('bcryptjs')
const FriendsService = require('../friends/friends-service')

const REGEX_UPPER_LOWER_NUMBER_SPECIAL = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&])[\S]+/

const AlertsService = {
    checkPending(db, user) {
        return db('alerts')
            .where({
                'sender': user,
                'type': 'request'
            })
            .then(async requests => {
                let ids = requests.map(req => req.receiver)
                let pendingFriends = []
        
                for (let i = 0; i < ids.length; i++) {
                  const friendObject = await FriendsService.getUser(db, ids[i])
                  pendingFriends.push(friendObject)
                }

                return pendingFriends
            })
    }
}

module.exports = AlertsService