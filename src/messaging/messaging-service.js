const xss = require('xss')
const nodemailer = require('nodemailer')

const MessagingService = {
    sendEmail(sender, receiver, subject, body) {
        console.log('cut')
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'networkkeithmarko@gmail.com',
                pass: '9369825hc'
            }
        })

        const mailOptions = {
            from: sender,
            to: receiver,
            subject,
            html: body
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
