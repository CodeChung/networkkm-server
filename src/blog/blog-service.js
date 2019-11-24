const xss = require('xss')
const bcrypt = require('bcryptjs')

const REGEX_UPPER_LOWER_NUMBER_SPECIAL = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&])[\S]+/

const BlogService = {
    getUserBlog(db, id) {
        return db('blog')
            .where('author', id)
            .then(posts => posts)
    }
}

module.exports = BlogService