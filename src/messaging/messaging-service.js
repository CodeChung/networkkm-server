const xss = require('xss')
const nodemailer = require('nodemailer')

const MessagingService = {
    sendEmail() {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'hc9825@gmail.com',
                pass: process.env.EMAIL
            }
        })

        const mailOptions = {
            from: 'sender@email.com',
            to: 'to@email.com',
            subject: 'Subject of your email',
            html: '<p>Your html here</p>'
        }
    },
}

module.exports = MessagingService
