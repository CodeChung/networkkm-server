const xss = require('xss')
const bcrypt = require('bcryptjs')

const REGEX_UPPER_LOWER_NUMBER_SPECIAL = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&])[\S]+/

const BlogService = {
    getUserBlog(db, id) {
        return db('blog')
            .where('author', id)
            .then(posts => posts)
    },
    getBlogComments(db, blogId) {
        return db('blog_comments')
            .where('blog_id', blogId)
            .leftJoin('users', 'users.id', 'blog_comments.user_id')
            .then(comments => comments.map(comment => ({
                blog_id: comment.blogId,
                comment: comment.comment,
                date_created: comment.date_created,
                first_name: comment.first_name,
                last_name: comment.last_name,
            })))
    },
    postComment(db, newComment) {
        return db('blog_comments')
            .insert(newComment)
            .returning('comment')
            .then(res => res)
    },
    postBlog(db, newBlog) {
        return db('blog')
            .insert(newBlog)
            .returning('*')
            .then(newBlogPost => newBlogPost)
    }
}

module.exports = BlogService