const xss = require('xss')
const nodemailer = require('nodemailer')

const MessagingService = {
    sendEmail() {
        console.log('cut')
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'email@gmail.com',
                pass: 'password goes here'
            }
        })

        const mailOptions = {
            from: 'hc9825@gmail.com',
            to: 'kmarko30@aol.com',
            subject: 'test',
            html: '<p>Welcome to NetworkKM</p>'
        }

        transporter.sendMail(mailOptions, function(err, info) {
            if (err)
                console.log(err)
            else 
                console.log(info)
        })
    },
}

module.exports = MessagingService
